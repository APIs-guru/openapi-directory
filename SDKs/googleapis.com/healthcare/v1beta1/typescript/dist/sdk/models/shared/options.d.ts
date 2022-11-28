import { SpeakeasyBase } from "../../../internal/utils";
import { ImageConfig } from "./imageconfig";
export declare enum OptionsPrimaryIdsEnum {
    PrimaryIdsOptionUnspecified = "PRIMARY_IDS_OPTION_UNSPECIFIED",
    Keep = "KEEP",
    Regen = "REGEN"
}
/**
 * Specifies additional options to apply to the base profile.
**/
export declare class Options extends SpeakeasyBase {
    cleanDescriptors?: Map<string, any>;
    cleanImage?: ImageConfig;
    primaryIds?: OptionsPrimaryIdsEnum;
}
