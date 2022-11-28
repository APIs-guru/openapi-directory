import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPeersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetPeersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPeersQueryParams;
}


export class GetPeersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPeers200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
