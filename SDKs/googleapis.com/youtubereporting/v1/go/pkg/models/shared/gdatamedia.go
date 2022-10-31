package shared




type GdataMediaReferenceTypeEnum string

const (
    GdataMediaReferenceTypeEnumPath GdataMediaReferenceTypeEnum = "PATH"
GdataMediaReferenceTypeEnumBlobRef GdataMediaReferenceTypeEnum = "BLOB_REF"
GdataMediaReferenceTypeEnumInline GdataMediaReferenceTypeEnum = "INLINE"
GdataMediaReferenceTypeEnumGetMedia GdataMediaReferenceTypeEnum = "GET_MEDIA"
GdataMediaReferenceTypeEnumCompositeMedia GdataMediaReferenceTypeEnum = "COMPOSITE_MEDIA"
GdataMediaReferenceTypeEnumBigstoreRef GdataMediaReferenceTypeEnum = "BIGSTORE_REF"
GdataMediaReferenceTypeEnumDiffVersionResponse GdataMediaReferenceTypeEnum = "DIFF_VERSION_RESPONSE"
GdataMediaReferenceTypeEnumDiffChecksumsResponse GdataMediaReferenceTypeEnum = "DIFF_CHECKSUMS_RESPONSE"
GdataMediaReferenceTypeEnumDiffDownloadResponse GdataMediaReferenceTypeEnum = "DIFF_DOWNLOAD_RESPONSE"
GdataMediaReferenceTypeEnumDiffUploadRequest GdataMediaReferenceTypeEnum = "DIFF_UPLOAD_REQUEST"
GdataMediaReferenceTypeEnumDiffUploadResponse GdataMediaReferenceTypeEnum = "DIFF_UPLOAD_RESPONSE"
GdataMediaReferenceTypeEnumCosmoBinaryReference GdataMediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
GdataMediaReferenceTypeEnumArbitraryBytes GdataMediaReferenceTypeEnum = "ARBITRARY_BYTES"
)


type GdataMedia struct {
    Algorithm *string `json:"algorithm,omitempty"`
    BigstoreObjectRef *string `json:"bigstoreObjectRef,omitempty"`
    BlobRef *string `json:"blobRef,omitempty"`
    Blobstore2Info *GdataBlobstore2Info `json:"blobstore2Info,omitempty"`
    CompositeMedia []GdataCompositeMedia `json:"compositeMedia,omitempty"`
    ContentType *string `json:"contentType,omitempty"`
    ContentTypeInfo *GdataContentTypeInfo `json:"contentTypeInfo,omitempty"`
    CosmoBinaryReference *string `json:"cosmoBinaryReference,omitempty"`
    Crc32cHash *int64 `json:"crc32cHash,omitempty"`
    DiffChecksumsResponse *GdataDiffChecksumsResponse `json:"diffChecksumsResponse,omitempty"`
    DiffDownloadResponse *GdataDiffDownloadResponse `json:"diffDownloadResponse,omitempty"`
    DiffUploadRequest *GdataDiffUploadRequest `json:"diffUploadRequest,omitempty"`
    DiffUploadResponse *GdataDiffUploadResponse `json:"diffUploadResponse,omitempty"`
    DiffVersionResponse *GdataDiffVersionResponse `json:"diffVersionResponse,omitempty"`
    DownloadParameters *GdataDownloadParameters `json:"downloadParameters,omitempty"`
    Filename *string `json:"filename,omitempty"`
    Hash *string `json:"hash,omitempty"`
    HashVerified *bool `json:"hashVerified,omitempty"`
    Inline *string `json:"inline,omitempty"`
    IsPotentialRetry *bool `json:"isPotentialRetry,omitempty"`
    Length *string `json:"length,omitempty"`
    Md5Hash *string `json:"md5Hash,omitempty"`
    MediaID *string `json:"mediaId,omitempty"`
    ObjectID *GdataObjectID `json:"objectId,omitempty"`
    Path *string `json:"path,omitempty"`
    ReferenceType *GdataMediaReferenceTypeEnum `json:"referenceType,omitempty"`
    Sha1Hash *string `json:"sha1Hash,omitempty"`
    Sha256Hash *string `json:"sha256Hash,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

