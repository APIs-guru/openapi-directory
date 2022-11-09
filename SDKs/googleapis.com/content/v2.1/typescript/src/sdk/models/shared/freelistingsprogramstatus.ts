import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FreeListingsProgramStatusRegionStatus } from "./freelistingsprogramstatusregionstatus";

export enum FreeListingsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED"
,    NotEnabled = "NOT_ENABLED"
,    NoOffersUploaded = "NO_OFFERS_UPLOADED"
,    Enabled = "ENABLED"
}


// FreeListingsProgramStatus
/** 
 * Response message for GetFreeListingsProgramStatus.
**/
export class FreeListingsProgramStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=globalState" })
  globalState?: FreeListingsProgramStatusGlobalStateEnum;

  @Metadata({ data: "json, name=regionStatuses", elemType: shared.FreeListingsProgramStatusRegionStatus })
  regionStatuses?: FreeListingsProgramStatusRegionStatus[];
}
