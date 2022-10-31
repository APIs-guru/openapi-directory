package shared



type Media struct {
    AccountID *string `json:"account_id,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    MaxDownloadsAllowed *int64 `json:"max_downloads_allowed,omitempty"`
    MediaSize *int64 `json:"media_size,omitempty"`
    MetadataPrimary *string `json:"metadata_primary,omitempty"`
    MetadataSecondary *string `json:"metadata_secondary,omitempty"`
    MimeType *string `json:"mime_type,omitempty"`
    OriginalFileName *string `json:"original_file_name,omitempty"`
    Public *bool `json:"public,omitempty"`
    StoreID *string `json:"store_id,omitempty"`
    TimeCreated *string `json:"time_created,omitempty"`
    TimeLastUpdated *string `json:"time_last_updated,omitempty"`
    TimesDownloaded *int64 `json:"times_downloaded,omitempty"`
    
}

