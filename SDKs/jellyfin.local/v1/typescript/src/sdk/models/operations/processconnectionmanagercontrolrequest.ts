import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProcessConnectionManagerControlRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class ProcessConnectionManagerControlRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProcessConnectionManagerControlRequestPathParams;
}


export class ProcessConnectionManagerControlRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processConnectionManagerControlRequest200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
