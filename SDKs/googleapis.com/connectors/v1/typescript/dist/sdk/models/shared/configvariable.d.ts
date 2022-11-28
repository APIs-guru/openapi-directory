import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * ConfigVariable represents a configuration variable present in a Connection. or AuthConfig.
**/
export declare class ConfigVariable extends SpeakeasyBase {
    boolValue?: boolean;
    intValue?: string;
    key?: string;
    secretValue?: Secret;
    stringValue?: string;
}
