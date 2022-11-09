import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Expr } from "./expr";
import { Attribute } from "./attribute";


// GoogleCloudHealthcareV1beta1ConsentPolicy
/** 
 * Represents a user's consent in terms of the resources that can be accessed and under what conditions.
**/
export class GoogleCloudHealthcareV1beta1ConsentPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationRule" })
  authorizationRule?: Expr;

  @Metadata({ data: "json, name=resourceAttributes", elemType: shared.Attribute })
  resourceAttributes?: Attribute[];
}
