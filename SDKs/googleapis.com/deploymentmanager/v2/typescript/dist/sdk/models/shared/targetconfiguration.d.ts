import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";
export declare class TargetConfiguration extends SpeakeasyBase {
    config?: ConfigFile;
    imports?: ImportFile[];
}
