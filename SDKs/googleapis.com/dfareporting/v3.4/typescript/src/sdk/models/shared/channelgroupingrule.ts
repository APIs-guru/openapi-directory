import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";



// ChannelGroupingRule
/** 
 * Represents a DfaReporting channel grouping rule.
**/
export class ChannelGroupingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disjunctiveMatchStatements", elemType: DisjunctiveMatchStatement })
  disjunctiveMatchStatements?: DisjunctiveMatchStatement[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
