import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cardinality } from "./cardinality";



// EndCondition
/** 
 * The condition that a Waiter resource is waiting for.
**/
export class EndCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardinality" })
  cardinality?: Cardinality;
}
