import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetChangesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChangesQueryParams;
}


export class GetChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChanges200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
