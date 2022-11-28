import { SpeakeasyBase } from "../../../internal/utils";
import { KeyUsageDailyCountEpoch } from "./keyusagedailycountepoch";
export declare class KeyUsageResult extends SpeakeasyBase {
    dailyCount?: KeyUsageDailyCountEpoch[];
    end?: string;
    start?: string;
    total?: number;
}
