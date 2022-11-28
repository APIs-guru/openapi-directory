import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMediaReceiverRegistrar2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrar2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMediaReceiverRegistrar2PathParams;
}


export class GetMediaReceiverRegistrar2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMediaReceiverRegistrar2200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
