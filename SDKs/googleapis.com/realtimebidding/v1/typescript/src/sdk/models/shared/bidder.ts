import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Bidder
/** 
 * Bidder settings.
**/
export class Bidder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bypassNonguaranteedDealsPretargeting" })
  bypassNonguaranteedDealsPretargeting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cookieMatchingNetworkId" })
  cookieMatchingNetworkId?: string;

  @SpeakeasyMetadata({ data: "json, name=cookieMatchingUrl" })
  cookieMatchingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=dealsBillingId" })
  dealsBillingId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
