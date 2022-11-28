import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RetrievalImportanceImportanceEnum {
    Default = "DEFAULT",
    Highest = "HIGHEST",
    High = "HIGH",
    Low = "LOW",
    None = "NONE"
}
export declare class RetrievalImportance extends SpeakeasyBase {
    importance?: RetrievalImportanceImportanceEnum;
}
