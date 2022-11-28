import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeTppoAuth2Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
