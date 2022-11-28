import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
/**
 * Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
**/
export declare class ConfigSource extends SpeakeasyBase {
    files?: ConfigFile[];
    id?: string;
}
