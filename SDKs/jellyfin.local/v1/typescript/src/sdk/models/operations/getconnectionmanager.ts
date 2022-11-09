import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionManagerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManagerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConnectionManagerPathParams;
}


export class GetConnectionManagerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConnectionManager200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
