import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDescriptionXml2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetDescriptionXml2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDescriptionXml2PathParams;
}


export class GetDescriptionXml2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDescriptionXml2200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
