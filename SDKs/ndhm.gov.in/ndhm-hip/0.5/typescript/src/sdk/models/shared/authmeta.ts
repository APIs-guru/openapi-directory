import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry?: string;

  @Metadata({ data: "json, name=hint" })
  hint?: string;
}
