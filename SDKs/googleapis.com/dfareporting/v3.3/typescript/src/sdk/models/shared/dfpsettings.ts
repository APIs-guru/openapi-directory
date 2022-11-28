import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DfpSettings
/** 
 * Google Ad Manager Settings
**/
export class DfpSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dfpNetworkCode" })
  dfpNetworkCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dfpNetworkName" })
  dfpNetworkName?: string;

  @SpeakeasyMetadata({ data: "json, name=programmaticPlacementAccepted" })
  programmaticPlacementAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pubPaidPlacementAccepted" })
  pubPaidPlacementAccepted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publisherPortalOnly" })
  publisherPortalOnly?: boolean;
}
