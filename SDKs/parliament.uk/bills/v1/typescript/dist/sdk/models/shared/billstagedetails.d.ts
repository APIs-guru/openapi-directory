import { SpeakeasyBase } from "../../../internal/utils";
import { Committee } from "./committee";
import { HouseEnum } from "./houseenum";
import { BillStageSitting } from "./billstagesitting";
export declare class BillStageDetails extends SpeakeasyBase {
    abbreviation?: string;
    committee?: Committee;
    description?: string;
    house?: HouseEnum;
    id?: number;
    lastUpdate?: Date;
    nextStageBillStageId?: number;
    previousStageBillStageId?: number;
    sessionId?: number;
    sortOrder?: number;
    stageId?: number;
    stageSittings?: BillStageSitting[];
}
