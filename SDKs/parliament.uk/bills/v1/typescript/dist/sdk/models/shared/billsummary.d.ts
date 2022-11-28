import { SpeakeasyBase } from "../../../internal/utils";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
export declare class BillSummary extends SpeakeasyBase {
    billId?: number;
    billTypeId?: number;
    billWithdrawn?: Date;
    currentHouse?: HouseEnum;
    currentStage?: StageSummary;
    includedSessionIds?: number[];
    introducedSessionId?: number;
    isAct?: boolean;
    isDefeated?: boolean;
    lastUpdate?: Date;
    originatingHouse?: HouseEnum;
    shortTitle?: string;
}
