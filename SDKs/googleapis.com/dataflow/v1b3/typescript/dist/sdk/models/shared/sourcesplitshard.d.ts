import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
export declare enum SourceSplitShardDerivationModeEnum {
    SourceDerivationModeUnknown = "SOURCE_DERIVATION_MODE_UNKNOWN",
    SourceDerivationModeIndependent = "SOURCE_DERIVATION_MODE_INDEPENDENT",
    SourceDerivationModeChildOfCurrent = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT",
    SourceDerivationModeSiblingOfCurrent = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
}
/**
 * DEPRECATED in favor of DerivedSource.
**/
export declare class SourceSplitShard extends SpeakeasyBase {
    derivationMode?: SourceSplitShardDerivationModeEnum;
    source?: Source;
}
