import { SpeakeasyBase } from "../../../internal/utils";
import { Publication } from "./publication";
import { BillStageSittingPublicationList } from "./billstagesittingpublicationlist";
export declare class BillStagePublicationList extends SpeakeasyBase {
    billStageId?: number;
    publications?: Publication[];
    sittings?: BillStageSittingPublicationList[];
}
