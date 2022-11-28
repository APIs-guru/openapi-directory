import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LanguageStatsStatusEnum {
    Success = "success",
    Failure = "failure",
    Pending = "pending"
}


export class LanguageStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts?: number;

  @SpeakeasyMetadata({ data: "json, name=analysis-date" })
  analysisDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commit-date" })
  commitDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=commit-id" })
  commitId?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lines" })
  lines?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LanguageStatsStatusEnum;
}
