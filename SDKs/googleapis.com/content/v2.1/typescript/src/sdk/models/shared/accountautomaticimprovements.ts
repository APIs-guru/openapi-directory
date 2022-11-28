import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountImageImprovementsInput } from "./accountimageimprovements";
import { AccountItemUpdatesInput } from "./accountitemupdates";
import { AccountShippingImprovements } from "./accountshippingimprovements";
import { AccountImageImprovements } from "./accountimageimprovements";
import { AccountItemUpdates } from "./accountitemupdates";



// AccountAutomaticImprovementsInput
/** 
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
**/
export class AccountAutomaticImprovementsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageImprovements" })
  imageImprovements?: AccountImageImprovementsInput;

  @SpeakeasyMetadata({ data: "json, name=itemUpdates" })
  itemUpdates?: AccountItemUpdatesInput;

  @SpeakeasyMetadata({ data: "json, name=shippingImprovements" })
  shippingImprovements?: AccountShippingImprovements;
}


// AccountAutomaticImprovements
/** 
 * The automatic improvements of the account can be used to automatically update items, improve images and shipping.
**/
export class AccountAutomaticImprovements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageImprovements" })
  imageImprovements?: AccountImageImprovements;

  @SpeakeasyMetadata({ data: "json, name=itemUpdates" })
  itemUpdates?: AccountItemUpdates;

  @SpeakeasyMetadata({ data: "json, name=shippingImprovements" })
  shippingImprovements?: AccountShippingImprovements;
}
