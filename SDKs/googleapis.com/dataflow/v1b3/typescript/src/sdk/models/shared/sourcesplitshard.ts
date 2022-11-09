import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";

export enum SourceSplitShardDerivationModeEnum {
    SourceDerivationModeUnknown = "SOURCE_DERIVATION_MODE_UNKNOWN"
,    SourceDerivationModeIndependent = "SOURCE_DERIVATION_MODE_INDEPENDENT"
,    SourceDerivationModeChildOfCurrent = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT"
,    SourceDerivationModeSiblingOfCurrent = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
}


// SourceSplitShard
/** 
 * DEPRECATED in favor of DerivedSource.
**/
export class SourceSplitShard extends SpeakeasyBase {
  @Metadata({ data: "json, name=derivationMode" })
  derivationMode?: SourceSplitShardDerivationModeEnum;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
