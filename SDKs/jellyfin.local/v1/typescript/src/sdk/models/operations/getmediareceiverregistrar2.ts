import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMediaReceiverRegistrar2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrar2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMediaReceiverRegistrar2PathParams;
}


export class GetMediaReceiverRegistrar2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMediaReceiverRegistrar2200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
