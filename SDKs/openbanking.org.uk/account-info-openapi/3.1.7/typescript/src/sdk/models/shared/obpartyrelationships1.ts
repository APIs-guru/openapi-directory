import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObPartyRelationships1Account
/** 
 * Relationship to the Account resource.
**/
export class ObPartyRelationships1Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Related" })
  related: string;
}


// ObPartyRelationships1
/** 
 * The Party's relationships with other resources.
**/
export class ObPartyRelationships1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account?: ObPartyRelationships1Account;
}
