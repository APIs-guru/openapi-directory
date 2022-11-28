import { SpeakeasyBase } from "../../../internal/utils";
import { InlineSecret } from "./inlinesecret";
import { SecretManagerSecret } from "./secretmanagersecret";
/**
 * Secrets and secret environment variables.
**/
export declare class Secrets extends SpeakeasyBase {
    inline?: InlineSecret[];
    secretManager?: SecretManagerSecret[];
}
