import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStatsIncrementFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=field" })
  field: string;
}


export class PostStatsIncrementFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=value" })
  value?: number;
}


export class PostStatsIncrementFieldRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStatsIncrementFieldPathParams;

  @Metadata()
  queryParams: PostStatsIncrementFieldQueryParams;
}


export class PostStatsIncrementFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
