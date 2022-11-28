import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPeersIdSystemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdSystemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPeersIdSystemPathParams;
}


export class GetPeersIdSystemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPeersIdSystem200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
