import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ImportFromUrlInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}
export declare enum ImportFromUrlInputDuplicateValidationScopeEnum {
    EntirePortal = "ENTIRE_PORTAL",
    ExactFolder = "EXACT_FOLDER"
}
export declare enum ImportFromUrlInputDuplicateValidationStrategyEnum {
    None = "NONE",
    Reject = "REJECT",
    ReturnExisting = "RETURN_EXISTING"
}
export declare class ImportFromUrlInput extends SpeakeasyBase {
    access: ImportFromUrlInputAccessEnum;
    duplicateValidationScope: ImportFromUrlInputDuplicateValidationScopeEnum;
    duplicateValidationStrategy: ImportFromUrlInputDuplicateValidationStrategyEnum;
    folderId?: string;
    folderPath?: string;
    name?: string;
    overwrite: boolean;
    ttl?: string;
    url: string;
}
