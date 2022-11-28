import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConnectionManagerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManagerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConnectionManagerPathParams;
}


export class GetConnectionManagerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getConnectionManager200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
