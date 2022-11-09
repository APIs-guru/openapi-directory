import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProcessContentDirectoryControlRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class ProcessContentDirectoryControlRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProcessContentDirectoryControlRequestPathParams;
}


export class ProcessContentDirectoryControlRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  processContentDirectoryControlRequest200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
