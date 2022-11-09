import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountImageImprovements } from "./accountimageimprovements";
import { AccountItemUpdates } from "./accountitemupdates";
import { AccountShippingImprovements } from "./accountshippingimprovements";


// AccountAutomaticImprovements
/** 
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
**/
export class AccountAutomaticImprovements extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageImprovements" })
  imageImprovements?: AccountImageImprovements;

  @Metadata({ data: "json, name=itemUpdates" })
  itemUpdates?: AccountItemUpdates;

  @Metadata({ data: "json, name=shippingImprovements" })
  shippingImprovements?: AccountShippingImprovements;
}
