import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMediaReceiverRegistrarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetMediaReceiverRegistrarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMediaReceiverRegistrarPathParams;
}


export class GetMediaReceiverRegistrarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMediaReceiverRegistrar200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
