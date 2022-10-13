package shared

type GdataMediaReferenceTypeEnum string

const (
	GdataMediaReferenceTypeEnumPath                  GdataMediaReferenceTypeEnum = "PATH"
	GdataMediaReferenceTypeEnumBlobRef               GdataMediaReferenceTypeEnum = "BLOB_REF"
	GdataMediaReferenceTypeEnumInline                GdataMediaReferenceTypeEnum = "INLINE"
	GdataMediaReferenceTypeEnumGetMedia              GdataMediaReferenceTypeEnum = "GET_MEDIA"
	GdataMediaReferenceTypeEnumCompositeMedia        GdataMediaReferenceTypeEnum = "COMPOSITE_MEDIA"
	GdataMediaReferenceTypeEnumBigstoreRef           GdataMediaReferenceTypeEnum = "BIGSTORE_REF"
	GdataMediaReferenceTypeEnumDiffVersionResponse   GdataMediaReferenceTypeEnum = "DIFF_VERSION_RESPONSE"
	GdataMediaReferenceTypeEnumDiffChecksumsResponse GdataMediaReferenceTypeEnum = "DIFF_CHECKSUMS_RESPONSE"
	GdataMediaReferenceTypeEnumDiffDownloadResponse  GdataMediaReferenceTypeEnum = "DIFF_DOWNLOAD_RESPONSE"
	GdataMediaReferenceTypeEnumDiffUploadRequest     GdataMediaReferenceTypeEnum = "DIFF_UPLOAD_REQUEST"
	GdataMediaReferenceTypeEnumDiffUploadResponse    GdataMediaReferenceTypeEnum = "DIFF_UPLOAD_RESPONSE"
	GdataMediaReferenceTypeEnumCosmoBinaryReference  GdataMediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
	GdataMediaReferenceTypeEnumArbitraryBytes        GdataMediaReferenceTypeEnum = "ARBITRARY_BYTES"
)

type GdataMedia struct {
	Algorithm             *string                      `json:"algorithm"`
	BigstoreObjectRef     *string                      `json:"bigstoreObjectRef"`
	BlobRef               *string                      `json:"blobRef"`
	Blobstore2Info        *GdataBlobstore2Info         `json:"blobstore2Info"`
	CompositeMedia        []GdataCompositeMedia        `json:"compositeMedia"`
	ContentType           *string                      `json:"contentType"`
	ContentTypeInfo       *GdataContentTypeInfo        `json:"contentTypeInfo"`
	CosmoBinaryReference  *string                      `json:"cosmoBinaryReference"`
	Crc32cHash            *int64                       `json:"crc32cHash"`
	DiffChecksumsResponse *GdataDiffChecksumsResponse  `json:"diffChecksumsResponse"`
	DiffDownloadResponse  *GdataDiffDownloadResponse   `json:"diffDownloadResponse"`
	DiffUploadRequest     *GdataDiffUploadRequest      `json:"diffUploadRequest"`
	DiffUploadResponse    *GdataDiffUploadResponse     `json:"diffUploadResponse"`
	DiffVersionResponse   *GdataDiffVersionResponse    `json:"diffVersionResponse"`
	DownloadParameters    *GdataDownloadParameters     `json:"downloadParameters"`
	Filename              *string                      `json:"filename"`
	Hash                  *string                      `json:"hash"`
	HashVerified          *bool                        `json:"hashVerified"`
	Inline                *string                      `json:"inline"`
	IsPotentialRetry      *bool                        `json:"isPotentialRetry"`
	Length                *string                      `json:"length"`
	Md5Hash               *string                      `json:"md5Hash"`
	MediaID               *string                      `json:"mediaId"`
	ObjectID              *GdataObjectID               `json:"objectId"`
	Path                  *string                      `json:"path"`
	ReferenceType         *GdataMediaReferenceTypeEnum `json:"referenceType"`
	Sha1Hash              *string                      `json:"sha1Hash"`
	Sha256Hash            *string                      `json:"sha256Hash"`
	Timestamp             *string                      `json:"timestamp"`
	Token                 *string                      `json:"token"`
}
