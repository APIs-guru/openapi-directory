import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";



// Subscriptions
/** 
 * A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
**/
export class Subscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: Subscription })
  subscriptions?: Subscription[];
}
