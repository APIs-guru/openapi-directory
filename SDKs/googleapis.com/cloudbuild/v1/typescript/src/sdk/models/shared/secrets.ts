import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InlineSecret } from "./inlinesecret";
import { SecretManagerSecret } from "./secretmanagersecret";


// Secrets
/** 
 * Secrets and secret environment variables.
**/
export class Secrets extends SpeakeasyBase {
  @Metadata({ data: "json, name=inline", elemType: shared.InlineSecret })
  inline?: InlineSecret[];

  @Metadata({ data: "json, name=secretManager", elemType: shared.SecretManagerSecret })
  secretManager?: SecretManagerSecret[];
}
