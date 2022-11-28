import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";


export enum DerivedSourceDerivationModeEnum {
    SourceDerivationModeUnknown = "SOURCE_DERIVATION_MODE_UNKNOWN",
    SourceDerivationModeIndependent = "SOURCE_DERIVATION_MODE_INDEPENDENT",
    SourceDerivationModeChildOfCurrent = "SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT",
    SourceDerivationModeSiblingOfCurrent = "SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT"
}


// DerivedSource
/** 
 * Specification of one of the bundles produced as a result of splitting a Source (e.g. when executing a SourceSplitRequest, or when splitting an active task using WorkItemStatus.dynamic_source_split), relative to the source being split.
**/
export class DerivedSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=derivationMode" })
  derivationMode?: DerivedSourceDerivationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
