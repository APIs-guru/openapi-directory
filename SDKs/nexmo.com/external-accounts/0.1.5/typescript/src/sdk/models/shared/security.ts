import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeBasicAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeBearerAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
