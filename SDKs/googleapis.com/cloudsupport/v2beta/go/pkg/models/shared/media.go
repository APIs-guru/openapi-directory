package shared

type MediaReferenceTypeEnum string

const (
	MediaReferenceTypeEnumPath                  MediaReferenceTypeEnum = "PATH"
	MediaReferenceTypeEnumBlobRef               MediaReferenceTypeEnum = "BLOB_REF"
	MediaReferenceTypeEnumInline                MediaReferenceTypeEnum = "INLINE"
	MediaReferenceTypeEnumGetMedia              MediaReferenceTypeEnum = "GET_MEDIA"
	MediaReferenceTypeEnumCompositeMedia        MediaReferenceTypeEnum = "COMPOSITE_MEDIA"
	MediaReferenceTypeEnumBigstoreRef           MediaReferenceTypeEnum = "BIGSTORE_REF"
	MediaReferenceTypeEnumDiffVersionResponse   MediaReferenceTypeEnum = "DIFF_VERSION_RESPONSE"
	MediaReferenceTypeEnumDiffChecksumsResponse MediaReferenceTypeEnum = "DIFF_CHECKSUMS_RESPONSE"
	MediaReferenceTypeEnumDiffDownloadResponse  MediaReferenceTypeEnum = "DIFF_DOWNLOAD_RESPONSE"
	MediaReferenceTypeEnumDiffUploadRequest     MediaReferenceTypeEnum = "DIFF_UPLOAD_REQUEST"
	MediaReferenceTypeEnumDiffUploadResponse    MediaReferenceTypeEnum = "DIFF_UPLOAD_RESPONSE"
	MediaReferenceTypeEnumCosmoBinaryReference  MediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
	MediaReferenceTypeEnumArbitraryBytes        MediaReferenceTypeEnum = "ARBITRARY_BYTES"
)

type Media struct {
	Algorithm             *string                 `json:"algorithm"`
	BigstoreObjectRef     *string                 `json:"bigstoreObjectRef"`
	BlobRef               *string                 `json:"blobRef"`
	Blobstore2Info        *Blobstore2Info         `json:"blobstore2Info"`
	CompositeMedia        []CompositeMedia        `json:"compositeMedia"`
	ContentType           *string                 `json:"contentType"`
	ContentTypeInfo       *ContentTypeInfo        `json:"contentTypeInfo"`
	CosmoBinaryReference  *string                 `json:"cosmoBinaryReference"`
	Crc32cHash            *int64                  `json:"crc32cHash"`
	DiffChecksumsResponse *DiffChecksumsResponse  `json:"diffChecksumsResponse"`
	DiffDownloadResponse  *DiffDownloadResponse   `json:"diffDownloadResponse"`
	DiffUploadRequest     *DiffUploadRequest      `json:"diffUploadRequest"`
	DiffUploadResponse    *DiffUploadResponse     `json:"diffUploadResponse"`
	DiffVersionResponse   *DiffVersionResponse    `json:"diffVersionResponse"`
	DownloadParameters    *DownloadParameters     `json:"downloadParameters"`
	Filename              *string                 `json:"filename"`
	Hash                  *string                 `json:"hash"`
	HashVerified          *bool                   `json:"hashVerified"`
	Inline                *string                 `json:"inline"`
	IsPotentialRetry      *bool                   `json:"isPotentialRetry"`
	Length                *string                 `json:"length"`
	Md5Hash               *string                 `json:"md5Hash"`
	MediaID               *string                 `json:"mediaId"`
	ObjectID              *ObjectID               `json:"objectId"`
	Path                  *string                 `json:"path"`
	ReferenceType         *MediaReferenceTypeEnum `json:"referenceType"`
	Sha1Hash              *string                 `json:"sha1Hash"`
	Sha256Hash            *string                 `json:"sha256Hash"`
	Timestamp             *string                 `json:"timestamp"`
	Token                 *string                 `json:"token"`
}
