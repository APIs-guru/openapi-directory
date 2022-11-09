import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DfpSettings
/** 
 * Google Ad Manager Settings
**/
export class DfpSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=dfpNetworkCode" })
  dfpNetworkCode?: string;

  @Metadata({ data: "json, name=dfpNetworkName" })
  dfpNetworkName?: string;

  @Metadata({ data: "json, name=programmaticPlacementAccepted" })
  programmaticPlacementAccepted?: boolean;

  @Metadata({ data: "json, name=pubPaidPlacementAccepted" })
  pubPaidPlacementAccepted?: boolean;

  @Metadata({ data: "json, name=publisherPortalOnly" })
  publisherPortalOnly?: boolean;
}
