import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionTagListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionTagListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionTagListQueryParams;
}


export class GetActionTagListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
