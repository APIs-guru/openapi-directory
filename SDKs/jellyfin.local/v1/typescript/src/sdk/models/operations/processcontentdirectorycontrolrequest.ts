import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProcessContentDirectoryControlRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class ProcessContentDirectoryControlRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProcessContentDirectoryControlRequestPathParams;
}


export class ProcessContentDirectoryControlRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  processContentDirectoryControlRequest200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
