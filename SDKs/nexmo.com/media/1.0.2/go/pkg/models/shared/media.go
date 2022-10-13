package shared

type Media struct {
	AccountID           *string `json:"account_id"`
	Etag                *string `json:"etag"`
	ID                  *string `json:"id"`
	MaxDownloadsAllowed *int64  `json:"max_downloads_allowed"`
	MediaSize           *int64  `json:"media_size"`
	MetadataPrimary     *string `json:"metadata_primary"`
	MetadataSecondary   *string `json:"metadata_secondary"`
	MimeType            *string `json:"mime_type"`
	OriginalFileName    *string `json:"original_file_name"`
	Public              *bool   `json:"public"`
	StoreID             *string `json:"store_id"`
	TimeCreated         *string `json:"time_created"`
	TimeLastUpdated     *string `json:"time_last_updated"`
	TimesDownloaded     *int64  `json:"times_downloaded"`
}
