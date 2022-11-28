import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusRegionStatus } from "./shoppingadsprogramstatusregionstatus";


export enum ShoppingAdsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}


// ShoppingAdsProgramStatus
/** 
 * Response message for GetShoppingAdsProgramStatus.
**/
export class ShoppingAdsProgramStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=globalState" })
  globalState?: ShoppingAdsProgramStatusGlobalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=regionStatuses", elemType: ShoppingAdsProgramStatusRegionStatus })
  regionStatuses?: ShoppingAdsProgramStatusRegionStatus[];
}
