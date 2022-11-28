import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserViewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUserViewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeExternalContent" })
  includeExternalContent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeHidden" })
  includeHidden?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=presetViews" })
  presetViews?: string[];
}


export class GetUserViewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserViewsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserViewsQueryParams;
}


export class GetUserViewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
