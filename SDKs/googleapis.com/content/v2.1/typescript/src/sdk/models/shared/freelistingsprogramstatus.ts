import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeListingsProgramStatusRegionStatus } from "./freelistingsprogramstatusregionstatus";


export enum FreeListingsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}


// FreeListingsProgramStatus
/** 
 * Response message for GetFreeListingsProgramStatus.
**/
export class FreeListingsProgramStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=globalState" })
  globalState?: FreeListingsProgramStatusGlobalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=regionStatuses", elemType: FreeListingsProgramStatusRegionStatus })
  regionStatuses?: FreeListingsProgramStatusRegionStatus[];
}
