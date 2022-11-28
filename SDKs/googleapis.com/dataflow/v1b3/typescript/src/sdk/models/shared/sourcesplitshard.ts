import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";


export enum SourceSplitShardDerivationModeEnum {
    SourceDerivationModeUnknown = "SOURCE_DERIVATION_MODE_UNKNOWN",
    SourceDerivationModeIndependent = "SOURCE_DERIVATION_MODE_INDEPENDENT",
    SourceDerivationModeChildOfCurrent = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT",
    SourceDerivationModeSiblingOfCurrent = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
}


// SourceSplitShard
/** 
 * DEPRECATED in favor of DerivedSource.
**/
export class SourceSplitShard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=derivationMode" })
  derivationMode?: SourceSplitShardDerivationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
