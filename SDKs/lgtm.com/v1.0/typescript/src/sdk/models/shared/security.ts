import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
