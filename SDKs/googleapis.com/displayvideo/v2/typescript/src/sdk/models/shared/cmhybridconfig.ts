import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CmHybridConfig
/** 
 * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
**/
export class CmHybridConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cmAccountId" })
  cmAccountId?: string;

  @Metadata({ data: "json, name=cmFloodlightConfigId" })
  cmFloodlightConfigId?: string;

  @Metadata({ data: "json, name=cmFloodlightLinkingAuthorized" })
  cmFloodlightLinkingAuthorized?: boolean;

  @Metadata({ data: "json, name=cmSyncableSiteIds" })
  cmSyncableSiteIds?: string[];

  @Metadata({ data: "json, name=dv360ToCmCostReportingEnabled" })
  dv360ToCmCostReportingEnabled?: boolean;

  @Metadata({ data: "json, name=dv360ToCmDataSharingEnabled" })
  dv360ToCmDataSharingEnabled?: boolean;
}
