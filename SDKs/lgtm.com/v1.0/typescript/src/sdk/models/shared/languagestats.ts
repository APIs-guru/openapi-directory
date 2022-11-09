import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LanguageStatsStatusEnum {
    Success = "success"
,    Failure = "failure"
,    Pending = "pending"
}


export class LanguageStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts?: number;

  @Metadata({ data: "json, name=analysis-date" })
  analysisDate?: Date;

  @Metadata({ data: "json, name=commit-date" })
  commitDate?: Date;

  @Metadata({ data: "json, name=commit-id" })
  commitId?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lines" })
  lines?: number;

  @Metadata({ data: "json, name=status" })
  status?: LanguageStatsStatusEnum;
}
