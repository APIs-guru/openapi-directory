import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObPartyRelationships1Account
/** 
 * Relationship to the Account resource.
**/
export class ObPartyRelationships1Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Related" })
  related: string;
}


// ObPartyRelationships1
/** 
 * The Party's relationships with other resources.
**/
export class ObPartyRelationships1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account?: ObPartyRelationships1Account;
}
