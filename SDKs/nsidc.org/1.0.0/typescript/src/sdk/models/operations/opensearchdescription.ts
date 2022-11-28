import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OpensearchDescriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  opensearchDescription200ApplicationOpensearchdescriptionPlusXmlString?: string;
}
