import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMediaReceiverRegistrarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMediaReceiverRegistrarPathParams;
}


export class GetMediaReceiverRegistrarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMediaReceiverRegistrar200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
