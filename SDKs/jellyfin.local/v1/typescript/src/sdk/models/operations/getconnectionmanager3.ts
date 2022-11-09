import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConnectionManager3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetConnectionManager3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConnectionManager3PathParams;
}


export class GetConnectionManager3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getConnectionManager3200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
