import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { Attribute } from "./attribute";



// GoogleCloudHealthcareV1ConsentPolicy
/** 
 * Represents a user's consent in terms of the resources that can be accessed and under what conditions.
**/
export class GoogleCloudHealthcareV1ConsentPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationRule" })
  authorizationRule?: Expr;

  @SpeakeasyMetadata({ data: "json, name=resourceAttributes", elemType: Attribute })
  resourceAttributes?: Attribute[];
}
