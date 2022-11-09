import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContentDirectoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContentDirectoryPathParams;
}


export class GetContentDirectoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentDirectory200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
