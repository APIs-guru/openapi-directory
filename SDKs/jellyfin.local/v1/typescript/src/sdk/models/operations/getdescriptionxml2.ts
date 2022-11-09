import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDescriptionXml2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetDescriptionXml2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDescriptionXml2PathParams;
}


export class GetDescriptionXml2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDescriptionXml2200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
