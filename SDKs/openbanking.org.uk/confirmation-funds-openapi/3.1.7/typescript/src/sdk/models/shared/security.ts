import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemePsuoAuth2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeTppoAuth2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
