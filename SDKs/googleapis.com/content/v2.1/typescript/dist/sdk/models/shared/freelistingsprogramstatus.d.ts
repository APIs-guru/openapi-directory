import { SpeakeasyBase } from "../../../internal/utils";
import { FreeListingsProgramStatusRegionStatus } from "./freelistingsprogramstatusregionstatus";
export declare enum FreeListingsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}
/**
 * Response message for GetFreeListingsProgramStatus.
**/
export declare class FreeListingsProgramStatus extends SpeakeasyBase {
    globalState?: FreeListingsProgramStatusGlobalStateEnum;
    regionStatuses?: FreeListingsProgramStatusRegionStatus[];
}
