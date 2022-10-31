package shared




type ImportFromURLInputAccessEnum string

const (
    ImportFromURLInputAccessEnumPublicIndexable ImportFromURLInputAccessEnum = "PUBLIC_INDEXABLE"
ImportFromURLInputAccessEnumPublicNotIndexable ImportFromURLInputAccessEnum = "PUBLIC_NOT_INDEXABLE"
ImportFromURLInputAccessEnumHiddenIndexable ImportFromURLInputAccessEnum = "HIDDEN_INDEXABLE"
ImportFromURLInputAccessEnumHiddenNotIndexable ImportFromURLInputAccessEnum = "HIDDEN_NOT_INDEXABLE"
ImportFromURLInputAccessEnumHiddenPrivate ImportFromURLInputAccessEnum = "HIDDEN_PRIVATE"
ImportFromURLInputAccessEnumPrivate ImportFromURLInputAccessEnum = "PRIVATE"
)



type ImportFromURLInputDuplicateValidationScopeEnum string

const (
    ImportFromURLInputDuplicateValidationScopeEnumEntirePortal ImportFromURLInputDuplicateValidationScopeEnum = "ENTIRE_PORTAL"
ImportFromURLInputDuplicateValidationScopeEnumExactFolder ImportFromURLInputDuplicateValidationScopeEnum = "EXACT_FOLDER"
)



type ImportFromURLInputDuplicateValidationStrategyEnum string

const (
    ImportFromURLInputDuplicateValidationStrategyEnumNone ImportFromURLInputDuplicateValidationStrategyEnum = "NONE"
ImportFromURLInputDuplicateValidationStrategyEnumReject ImportFromURLInputDuplicateValidationStrategyEnum = "REJECT"
ImportFromURLInputDuplicateValidationStrategyEnumReturnExisting ImportFromURLInputDuplicateValidationStrategyEnum = "RETURN_EXISTING"
)


type ImportFromURLInput struct {
    Access ImportFromURLInputAccessEnum `json:"access"`
    DuplicateValidationScope ImportFromURLInputDuplicateValidationScopeEnum `json:"duplicateValidationScope"`
    DuplicateValidationStrategy ImportFromURLInputDuplicateValidationStrategyEnum `json:"duplicateValidationStrategy"`
    FolderID *string `json:"folderId,omitempty"`
    FolderPath *string `json:"folderPath,omitempty"`
    Name *string `json:"name,omitempty"`
    Overwrite bool `json:"overwrite"`
    TTL *string `json:"ttl,omitempty"`
    URL string `json:"url"`
    
}

