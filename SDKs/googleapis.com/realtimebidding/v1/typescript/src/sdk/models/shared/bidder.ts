import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Bidder
/** 
 * Bidder settings.
**/
export class Bidder extends SpeakeasyBase {
  @Metadata({ data: "json, name=bypassNonguaranteedDealsPretargeting" })
  bypassNonguaranteedDealsPretargeting?: boolean;

  @Metadata({ data: "json, name=cookieMatchingNetworkId" })
  cookieMatchingNetworkId?: string;

  @Metadata({ data: "json, name=cookieMatchingUrl" })
  cookieMatchingUrl?: string;

  @Metadata({ data: "json, name=dealsBillingId" })
  dealsBillingId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
