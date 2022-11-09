import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";


// ChannelGroupingRule
/** 
 * Represents a DfaReporting channel grouping rule.
**/
export class ChannelGroupingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=disjunctiveMatchStatements", elemType: shared.DisjunctiveMatchStatement })
  disjunctiveMatchStatements?: DisjunctiveMatchStatement[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
