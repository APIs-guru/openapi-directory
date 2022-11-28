import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RetrievalImportanceImportanceEnum {
    Default = "DEFAULT",
    Highest = "HIGHEST",
    High = "HIGH",
    Low = "LOW",
    None = "NONE"
}


export class RetrievalImportance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=importance" })
  importance?: RetrievalImportanceImportanceEnum;
}
