import { SpeakeasyBase } from "../../../internal/utils";
import { BillAgent } from "./billagent";
import { HouseEnum } from "./houseenum";
import { StageSummary } from "./stagesummary";
import { Promoter } from "./promoter";
import { Sponsor } from "./sponsor";
export declare class Bill extends SpeakeasyBase {
    agent?: BillAgent;
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
    longTitle?: string;
    originatingHouse?: HouseEnum;
    petitionInformation?: string;
    petitioningPeriod?: string;
    promoters?: Promoter[];
    shortTitle?: string;
    sponsors?: Sponsor[];
    summary?: string;
}
