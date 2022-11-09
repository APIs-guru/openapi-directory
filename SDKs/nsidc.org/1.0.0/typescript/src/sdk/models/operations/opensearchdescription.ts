import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OpensearchDescriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  opensearchDescription200ApplicationOpensearchdescriptionPlusXmlString?: string;
}
