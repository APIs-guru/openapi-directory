import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProcessConnectionManagerControlRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class ProcessConnectionManagerControlRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProcessConnectionManagerControlRequestPathParams;
}


export class ProcessConnectionManagerControlRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processConnectionManagerControlRequest200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
