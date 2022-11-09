import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShoppingAdsProgramStatusRegionStatus } from "./shoppingadsprogramstatusregionstatus";

export enum ShoppingAdsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED"
,    NotEnabled = "NOT_ENABLED"
,    NoOffersUploaded = "NO_OFFERS_UPLOADED"
,    Enabled = "ENABLED"
}


// ShoppingAdsProgramStatus
/** 
 * Response message for GetShoppingAdsProgramStatus.
**/
export class ShoppingAdsProgramStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=globalState" })
  globalState?: ShoppingAdsProgramStatusGlobalStateEnum;

  @Metadata({ data: "json, name=regionStatuses", elemType: shared.ShoppingAdsProgramStatusRegionStatus })
  regionStatuses?: ShoppingAdsProgramStatusRegionStatus[];
}
