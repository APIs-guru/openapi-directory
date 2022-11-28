import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPeersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPeersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPeersIdPathParams;
}


export class GetPeersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPeersId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
