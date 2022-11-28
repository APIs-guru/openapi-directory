import { SpeakeasyBase } from "../../../internal/utils";
import { ShoppingAdsProgramStatusRegionStatus } from "./shoppingadsprogramstatusregionstatus";
export declare enum ShoppingAdsProgramStatusGlobalStateEnum {
    ProgramStateUnspecified = "PROGRAM_STATE_UNSPECIFIED",
    NotEnabled = "NOT_ENABLED",
    NoOffersUploaded = "NO_OFFERS_UPLOADED",
    Enabled = "ENABLED"
}
/**
 * Response message for GetShoppingAdsProgramStatus.
**/
export declare class ShoppingAdsProgramStatus extends SpeakeasyBase {
    globalState?: ShoppingAdsProgramStatusGlobalStateEnum;
    regionStatuses?: ShoppingAdsProgramStatusRegionStatus[];
}
