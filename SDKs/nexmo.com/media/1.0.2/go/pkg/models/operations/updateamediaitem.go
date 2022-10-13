package operations

type UpdateAMediaItemRequestBody struct {
	Description         *string `multipartForm:"name=description"`
	MaxDownloadsAllowed *int64  `multipartForm:"name=max_downloads_allowed"`
	MetadataPrimary     *string `multipartForm:"name=metadata_primary"`
	MetadataSecondary   *string `multipartForm:"name=metadata_secondary"`
	MimeType            *string `multipartForm:"name=mime_type"`
	Public              *bool   `multipartForm:"name=public"`
	Title               *string `multipartForm:"name=title"`
}

type UpdateAMediaItemRequest struct {
	Request *UpdateAMediaItemRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateAMediaItemResponse struct {
	ContentType string
	StatusCode  int64
}
