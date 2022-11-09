import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionManager2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManager2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConnectionManager2PathParams;
}


export class GetConnectionManager2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConnectionManager2200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
