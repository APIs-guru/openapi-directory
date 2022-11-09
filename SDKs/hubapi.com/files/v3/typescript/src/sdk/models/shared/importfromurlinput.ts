import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImportFromUrlInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE"
,    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE"
,    HiddenIndexable = "HIDDEN_INDEXABLE"
,    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE"
,    HiddenPrivate = "HIDDEN_PRIVATE"
,    Private = "PRIVATE"
}

export enum ImportFromUrlInputDuplicateValidationScopeEnum {
    EntirePortal = "ENTIRE_PORTAL"
,    ExactFolder = "EXACT_FOLDER"
}

export enum ImportFromUrlInputDuplicateValidationStrategyEnum {
    None = "NONE"
,    Reject = "REJECT"
,    ReturnExisting = "RETURN_EXISTING"
}


export class ImportFromUrlInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access: ImportFromUrlInputAccessEnum;

  @Metadata({ data: "json, name=duplicateValidationScope" })
  duplicateValidationScope: ImportFromUrlInputDuplicateValidationScopeEnum;

  @Metadata({ data: "json, name=duplicateValidationStrategy" })
  duplicateValidationStrategy: ImportFromUrlInputDuplicateValidationStrategyEnum;

  @Metadata({ data: "json, name=folderId" })
  folderId?: string;

  @Metadata({ data: "json, name=folderPath" })
  folderPath?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overwrite" })
  overwrite: boolean;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
