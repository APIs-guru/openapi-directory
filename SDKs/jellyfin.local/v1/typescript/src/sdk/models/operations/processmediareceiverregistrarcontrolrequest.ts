import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProcessMediaReceiverRegistrarControlRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class ProcessMediaReceiverRegistrarControlRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProcessMediaReceiverRegistrarControlRequestPathParams;
}


export class ProcessMediaReceiverRegistrarControlRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processMediaReceiverRegistrarControlRequest200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
