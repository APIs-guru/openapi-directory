import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectLanguageStatsGradeEnum {
    APlus = "A+",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}

export enum ProjectLanguageStatsStatusEnum {
    Success = "success",
    Failure = "failure",
    Pending = "pending"
}


export class ProjectLanguageStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts?: number;

  @SpeakeasyMetadata({ data: "json, name=analysis-date" })
  analysisDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commit-date" })
  commitDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commit-id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: ProjectLanguageStatsGradeEnum;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lines" })
  lines?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProjectLanguageStatsStatusEnum;
}
