import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: string;

  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;
}
