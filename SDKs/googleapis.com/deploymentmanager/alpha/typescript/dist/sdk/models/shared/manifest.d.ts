import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";
export declare class Manifest extends SpeakeasyBase {
    config?: ConfigFile;
    expandedConfig?: string;
    id?: string;
    imports?: ImportFile[];
    insertTime?: string;
    layout?: string;
    manifestSizeBytes?: string;
    manifestSizeLimitBytes?: string;
    name?: string;
    selfLink?: string;
}
