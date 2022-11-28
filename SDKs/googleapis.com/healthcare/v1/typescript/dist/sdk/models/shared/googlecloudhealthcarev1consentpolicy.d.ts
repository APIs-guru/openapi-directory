import { SpeakeasyBase } from "../../../internal/utils";
import { Expr } from "./expr";
import { Attribute } from "./attribute";
/**
 * Represents a user's consent in terms of the resources that can be accessed and under what conditions.
**/
export declare class GoogleCloudHealthcareV1ConsentPolicy extends SpeakeasyBase {
    authorizationRule?: Expr;
    resourceAttributes?: Attribute[];
}
