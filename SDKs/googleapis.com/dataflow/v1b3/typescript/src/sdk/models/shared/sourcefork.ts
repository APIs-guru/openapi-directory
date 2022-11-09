import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSplitShard } from "./sourcesplitshard";
import { DerivedSource } from "./derivedsource";
import { SourceSplitShard } from "./sourcesplitshard";
import { DerivedSource } from "./derivedsource";


// SourceFork
/** 
 * DEPRECATED in favor of DynamicSourceSplit.
**/
export class SourceFork extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: SourceSplitShard;

  @Metadata({ data: "json, name=primarySource" })
  primarySource?: DerivedSource;

  @Metadata({ data: "json, name=residual" })
  residual?: SourceSplitShard;

  @Metadata({ data: "json, name=residualSource" })
  residualSource?: DerivedSource;
}
