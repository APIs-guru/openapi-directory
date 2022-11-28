import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.
**/
export declare class CmHybridConfig extends SpeakeasyBase {
    cmAccountId?: string;
    cmFloodlightConfigId?: string;
    cmFloodlightLinkingAuthorized?: boolean;
    cmSyncableSiteIds?: string[];
    dv360ToCmCostReportingEnabled?: boolean;
    dv360ToCmDataSharingEnabled?: boolean;
}
