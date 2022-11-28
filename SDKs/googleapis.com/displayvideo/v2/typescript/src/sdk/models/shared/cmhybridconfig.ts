import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CmHybridConfig
/** 
 * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
**/
export class CmHybridConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cmAccountId" })
  cmAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=cmFloodlightConfigId" })
  cmFloodlightConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=cmFloodlightLinkingAuthorized" })
  cmFloodlightLinkingAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cmSyncableSiteIds" })
  cmSyncableSiteIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=dv360ToCmCostReportingEnabled" })
  dv360ToCmCostReportingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dv360ToCmDataSharingEnabled" })
  dv360ToCmDataSharingEnabled?: boolean;
}
