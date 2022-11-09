import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContentDirectory3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectory3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContentDirectory3PathParams;
}


export class GetContentDirectory3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentDirectory3200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
