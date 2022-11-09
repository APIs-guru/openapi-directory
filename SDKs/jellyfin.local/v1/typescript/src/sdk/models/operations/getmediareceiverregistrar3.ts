import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMediaReceiverRegistrar3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrar3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMediaReceiverRegistrar3PathParams;
}


export class GetMediaReceiverRegistrar3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMediaReceiverRegistrar3200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
