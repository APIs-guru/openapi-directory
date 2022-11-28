import { SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";
import { BillStageSitting } from "./billstagesitting";
export declare class StageSummary extends SpeakeasyBase {
    abbreviation?: string;
    description?: string;
    house?: HouseEnum;
    id?: number;
    sessionId?: number;
    sortOrder?: number;
    stageId?: number;
    stageSittings?: BillStageSitting[];
}
