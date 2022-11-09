import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Cardinality } from "./cardinality";


// EndCondition
/** 
 * The condition that a Waiter resource is waiting for.
**/
export class EndCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=cardinality" })
  cardinality?: Cardinality;
}
