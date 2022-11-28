import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LanguageStatsStatusEnum {
    Success = "success",
    Failure = "failure",
    Pending = "pending"
}
export declare class LanguageStats extends SpeakeasyBase {
    alerts?: number;
    analysisDate?: Date;
    commitDate?: Date;
    commitId?: string;
    language?: string;
    lines?: number;
    status?: LanguageStatsStatusEnum;
}
