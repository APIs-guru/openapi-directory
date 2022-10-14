package shared

type GdataCompositeMediaReferenceTypeEnum string

const (
	GdataCompositeMediaReferenceTypeEnumPath                 GdataCompositeMediaReferenceTypeEnum = "PATH"
	GdataCompositeMediaReferenceTypeEnumBlobRef              GdataCompositeMediaReferenceTypeEnum = "BLOB_REF"
	GdataCompositeMediaReferenceTypeEnumInline               GdataCompositeMediaReferenceTypeEnum = "INLINE"
	GdataCompositeMediaReferenceTypeEnumBigstoreRef          GdataCompositeMediaReferenceTypeEnum = "BIGSTORE_REF"
	GdataCompositeMediaReferenceTypeEnumCosmoBinaryReference GdataCompositeMediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
)

type GdataCompositeMedia struct {
	BlobRef              *string                               `json:"blobRef,omitempty"`
	Blobstore2Info       *GdataBlobstore2Info                  `json:"blobstore2Info,omitempty"`
	CosmoBinaryReference *string                               `json:"cosmoBinaryReference,omitempty"`
	Crc32cHash           *int64                                `json:"crc32cHash,omitempty"`
	Inline               *string                               `json:"inline,omitempty"`
	Length               *string                               `json:"length,omitempty"`
	Md5Hash              *string                               `json:"md5Hash,omitempty"`
	ObjectID             *GdataObjectID                        `json:"objectId,omitempty"`
	Path                 *string                               `json:"path,omitempty"`
	ReferenceType        *GdataCompositeMediaReferenceTypeEnum `json:"referenceType,omitempty"`
	Sha1Hash             *string                               `json:"sha1Hash,omitempty"`
}
