import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmResourceBasedCud } from "./vmresourcebasedcud";


// Commitment
/** 
 * Commitments give you the ability to pay a recurring fee in exchange for a benefit, such as a discount for your use. For example, this object might contain details of a [spend-based committed use discount (CUD)](https://cloud.google.com/docs/cuds#spend_based_commitments). Within a CostScenario, adding a commitment includes the cost of the commitment and any discounts.
**/
export class Commitment extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vmResourceBasedCud" })
  vmResourceBasedCud?: VmResourceBasedCud;
}
