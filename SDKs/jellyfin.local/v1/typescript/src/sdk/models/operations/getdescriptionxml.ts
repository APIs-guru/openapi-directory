import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDescriptionXmlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serverId" })
  serverId: string;
}


export class GetDescriptionXmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDescriptionXmlPathParams;
}


export class GetDescriptionXmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDescriptionXml200TextXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
