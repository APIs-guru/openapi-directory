import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserViewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUserViewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includeExternalContent" })
  includeExternalContent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeHidden" })
  includeHidden?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=presetViews" })
  presetViews?: string[];
}


export class GetUserViewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserViewsPathParams;

  @Metadata()
  queryParams: GetUserViewsQueryParams;
}


export class GetUserViewsResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
