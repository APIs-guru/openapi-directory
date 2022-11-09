import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProjectLanguageStatsGradeEnum {
    APlus = "A+"
,    A = "A"
,    B = "B"
,    C = "C"
,    D = "D"
,    E = "E"
}

export enum ProjectLanguageStatsStatusEnum {
    Success = "success"
,    Failure = "failure"
,    Pending = "pending"
}


export class ProjectLanguageStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts?: number;

  @Metadata({ data: "json, name=analysis-date" })
  analysisDate?: Date;

  @Metadata({ data: "json, name=commit-date" })
  commitDate?: Date;

  @Metadata({ data: "json, name=commit-id" })
  commitId?: string;

  @Metadata({ data: "json, name=grade" })
  grade?: ProjectLanguageStatsGradeEnum;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lines" })
  lines?: number;

  @Metadata({ data: "json, name=status" })
  status?: ProjectLanguageStatsStatusEnum;
}
