import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceSplitShard } from "./sourcesplitshard";
import { DerivedSource } from "./derivedsource";



// SourceFork
/** 
 * DEPRECATED in favor of DynamicSourceSplit.
**/
export class SourceFork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: SourceSplitShard;

  @SpeakeasyMetadata({ data: "json, name=primarySource" })
  primarySource?: DerivedSource;

  @SpeakeasyMetadata({ data: "json, name=residual" })
  residual?: SourceSplitShard;

  @SpeakeasyMetadata({ data: "json, name=residualSource" })
  residualSource?: DerivedSource;
}
