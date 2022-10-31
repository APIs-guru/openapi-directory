package shared




type MediaReferenceTypeEnum string

const (
    MediaReferenceTypeEnumPath MediaReferenceTypeEnum = "PATH"
MediaReferenceTypeEnumBlobRef MediaReferenceTypeEnum = "BLOB_REF"
MediaReferenceTypeEnumInline MediaReferenceTypeEnum = "INLINE"
MediaReferenceTypeEnumGetMedia MediaReferenceTypeEnum = "GET_MEDIA"
MediaReferenceTypeEnumCompositeMedia MediaReferenceTypeEnum = "COMPOSITE_MEDIA"
MediaReferenceTypeEnumBigstoreRef MediaReferenceTypeEnum = "BIGSTORE_REF"
MediaReferenceTypeEnumDiffVersionResponse MediaReferenceTypeEnum = "DIFF_VERSION_RESPONSE"
MediaReferenceTypeEnumDiffChecksumsResponse MediaReferenceTypeEnum = "DIFF_CHECKSUMS_RESPONSE"
MediaReferenceTypeEnumDiffDownloadResponse MediaReferenceTypeEnum = "DIFF_DOWNLOAD_RESPONSE"
MediaReferenceTypeEnumDiffUploadRequest MediaReferenceTypeEnum = "DIFF_UPLOAD_REQUEST"
MediaReferenceTypeEnumDiffUploadResponse MediaReferenceTypeEnum = "DIFF_UPLOAD_RESPONSE"
MediaReferenceTypeEnumCosmoBinaryReference MediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
MediaReferenceTypeEnumArbitraryBytes MediaReferenceTypeEnum = "ARBITRARY_BYTES"
)


type Media struct {
    Algorithm *string `json:"algorithm,omitempty"`
    BigstoreObjectRef *string `json:"bigstoreObjectRef,omitempty"`
    BlobRef *string `json:"blobRef,omitempty"`
    Blobstore2Info *Blobstore2Info `json:"blobstore2Info,omitempty"`
    CompositeMedia []CompositeMedia `json:"compositeMedia,omitempty"`
    ContentType *string `json:"contentType,omitempty"`
    ContentTypeInfo *ContentTypeInfo `json:"contentTypeInfo,omitempty"`
    CosmoBinaryReference *string `json:"cosmoBinaryReference,omitempty"`
    Crc32cHash *int64 `json:"crc32cHash,omitempty"`
    DiffChecksumsResponse *DiffChecksumsResponse `json:"diffChecksumsResponse,omitempty"`
    DiffDownloadResponse *DiffDownloadResponse `json:"diffDownloadResponse,omitempty"`
    DiffUploadRequest *DiffUploadRequest `json:"diffUploadRequest,omitempty"`
    DiffUploadResponse *DiffUploadResponse `json:"diffUploadResponse,omitempty"`
    DiffVersionResponse *DiffVersionResponse `json:"diffVersionResponse,omitempty"`
    DownloadParameters *DownloadParameters `json:"downloadParameters,omitempty"`
    Filename *string `json:"filename,omitempty"`
    Hash *string `json:"hash,omitempty"`
    HashVerified *bool `json:"hashVerified,omitempty"`
    Inline *string `json:"inline,omitempty"`
    IsPotentialRetry *bool `json:"isPotentialRetry,omitempty"`
    Length *string `json:"length,omitempty"`
    Md5Hash *string `json:"md5Hash,omitempty"`
    MediaID *string `json:"mediaId,omitempty"`
    ObjectID *ObjectID `json:"objectId,omitempty"`
    Path *string `json:"path,omitempty"`
    ReferenceType *MediaReferenceTypeEnum `json:"referenceType,omitempty"`
    Sha1Hash *string `json:"sha1Hash,omitempty"`
    Sha256Hash *string `json:"sha256Hash,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

