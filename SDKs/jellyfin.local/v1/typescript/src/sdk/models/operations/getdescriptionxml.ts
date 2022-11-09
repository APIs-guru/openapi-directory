import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDescriptionXmlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetDescriptionXmlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDescriptionXmlPathParams;
}


export class GetDescriptionXmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDescriptionXml200TextXmlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
