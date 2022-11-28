import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProjectLanguageStatsGradeEnum {
    APlus = "A+",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}
export declare enum ProjectLanguageStatsStatusEnum {
    Success = "success",
    Failure = "failure",
    Pending = "pending"
}
export declare class ProjectLanguageStats extends SpeakeasyBase {
    alerts?: number;
    analysisDate?: Date;
    commitDate?: Date;
    commitId?: string;
    grade?: ProjectLanguageStatsGradeEnum;
    language?: string;
    lines?: number;
    status?: ProjectLanguageStatsStatusEnum;
}
