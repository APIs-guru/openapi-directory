import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenerateIdTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
