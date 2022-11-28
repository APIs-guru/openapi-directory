import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Relationship to the Account resource.
**/
export declare class ObPartyRelationships1Account extends SpeakeasyBase {
    id: string;
    related: string;
}
/**
 * The Party's relationships with other resources.
**/
export declare class ObPartyRelationships1 extends SpeakeasyBase {
    account?: ObPartyRelationships1Account;
}
