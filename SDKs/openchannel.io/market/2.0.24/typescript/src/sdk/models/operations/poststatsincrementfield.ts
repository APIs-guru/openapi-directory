import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStatsIncrementFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field" })
  field: string;
}


export class PostStatsIncrementFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=value" })
  value?: number;
}


export class PostStatsIncrementFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStatsIncrementFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: PostStatsIncrementFieldQueryParams;
}


export class PostStatsIncrementFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
