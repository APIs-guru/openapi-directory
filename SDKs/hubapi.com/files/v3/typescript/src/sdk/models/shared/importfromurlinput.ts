import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImportFromUrlInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}

export enum ImportFromUrlInputDuplicateValidationScopeEnum {
    EntirePortal = "ENTIRE_PORTAL",
    ExactFolder = "EXACT_FOLDER"
}

export enum ImportFromUrlInputDuplicateValidationStrategyEnum {
    None = "NONE",
    Reject = "REJECT",
    ReturnExisting = "RETURN_EXISTING"
}


export class ImportFromUrlInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access: ImportFromUrlInputAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=duplicateValidationScope" })
  duplicateValidationScope: ImportFromUrlInputDuplicateValidationScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=duplicateValidationStrategy" })
  duplicateValidationStrategy: ImportFromUrlInputDuplicateValidationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=folderId" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "json, name=folderPath" })
  folderPath?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overwrite" })
  overwrite: boolean;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
