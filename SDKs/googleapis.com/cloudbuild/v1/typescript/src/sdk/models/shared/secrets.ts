import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InlineSecret } from "./inlinesecret";
import { SecretManagerSecret } from "./secretmanagersecret";



// Secrets
/** 
 * Secrets and secret environment variables.
**/
export class Secrets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inline", elemType: InlineSecret })
  inline?: InlineSecret[];

  @SpeakeasyMetadata({ data: "json, name=secretManager", elemType: SecretManagerSecret })
  secretManager?: SecretManagerSecret[];
}
