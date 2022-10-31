package shared



type AppIcons struct {
    Category *string `json:"category,omitempty"`
    IconURL *string `json:"iconUrl,omitempty"`
    Size *int32 `json:"size,omitempty"`
    
}

type App struct {
    Authorized *bool `json:"authorized,omitempty"`
    CreateInFolderTemplate *string `json:"createInFolderTemplate,omitempty"`
    CreateURL *string `json:"createUrl,omitempty"`
    HasDriveWideScope *bool `json:"hasDriveWideScope,omitempty"`
    Icons []AppIcons `json:"icons,omitempty"`
    ID *string `json:"id,omitempty"`
    Installed *bool `json:"installed,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LongDescription *string `json:"longDescription,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    OpenURLTemplate *string `json:"openUrlTemplate,omitempty"`
    PrimaryFileExtensions []string `json:"primaryFileExtensions,omitempty"`
    PrimaryMimeTypes []string `json:"primaryMimeTypes,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    ProductURL *string `json:"productUrl,omitempty"`
    SecondaryFileExtensions []string `json:"secondaryFileExtensions,omitempty"`
    SecondaryMimeTypes []string `json:"secondaryMimeTypes,omitempty"`
    ShortDescription *string `json:"shortDescription,omitempty"`
    SupportsCreate *bool `json:"supportsCreate,omitempty"`
    SupportsImport *bool `json:"supportsImport,omitempty"`
    SupportsMultiOpen *bool `json:"supportsMultiOpen,omitempty"`
    SupportsOfflineCreate *bool `json:"supportsOfflineCreate,omitempty"`
    UseByDefault *bool `json:"useByDefault,omitempty"`
    
}

