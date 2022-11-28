import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMediaReceiverRegistrar3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrar3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMediaReceiverRegistrar3PathParams;
}


export class GetMediaReceiverRegistrar3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMediaReceiverRegistrar3200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
