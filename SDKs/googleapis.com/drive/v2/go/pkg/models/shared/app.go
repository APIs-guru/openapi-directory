package shared

type AppIcons struct {
	Category *string `json:"category"`
	IconURL  *string `json:"iconUrl"`
	Size     *int32  `json:"size"`
}

type App struct {
	Authorized              *bool      `json:"authorized"`
	CreateInFolderTemplate  *string    `json:"createInFolderTemplate"`
	CreateURL               *string    `json:"createUrl"`
	HasDriveWideScope       *bool      `json:"hasDriveWideScope"`
	Icons                   []AppIcons `json:"icons"`
	ID                      *string    `json:"id"`
	Installed               *bool      `json:"installed"`
	Kind                    *string    `json:"kind"`
	LongDescription         *string    `json:"longDescription"`
	Name                    *string    `json:"name"`
	ObjectType              *string    `json:"objectType"`
	OpenURLTemplate         *string    `json:"openUrlTemplate"`
	PrimaryFileExtensions   []string   `json:"primaryFileExtensions"`
	PrimaryMimeTypes        []string   `json:"primaryMimeTypes"`
	ProductID               *string    `json:"productId"`
	ProductURL              *string    `json:"productUrl"`
	SecondaryFileExtensions []string   `json:"secondaryFileExtensions"`
	SecondaryMimeTypes      []string   `json:"secondaryMimeTypes"`
	ShortDescription        *string    `json:"shortDescription"`
	SupportsCreate          *bool      `json:"supportsCreate"`
	SupportsImport          *bool      `json:"supportsImport"`
	SupportsMultiOpen       *bool      `json:"supportsMultiOpen"`
	SupportsOfflineCreate   *bool      `json:"supportsOfflineCreate"`
	UseByDefault            *bool      `json:"useByDefault"`
}
