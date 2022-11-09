import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RetrievalImportanceImportanceEnum {
    Default = "DEFAULT"
,    Highest = "HIGHEST"
,    High = "HIGH"
,    Low = "LOW"
,    None = "NONE"
}


export class RetrievalImportance extends SpeakeasyBase {
  @Metadata({ data: "json, name=importance" })
  importance?: RetrievalImportanceImportanceEnum;
}
