import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContentDirectory2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetContentDirectory2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContentDirectory2PathParams;
}


export class GetContentDirectory2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContentDirectory2200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
