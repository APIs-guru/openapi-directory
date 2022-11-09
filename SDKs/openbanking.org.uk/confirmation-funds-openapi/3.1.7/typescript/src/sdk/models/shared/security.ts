import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemePsuoAuth2Security extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeTppoAuth2Security extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
