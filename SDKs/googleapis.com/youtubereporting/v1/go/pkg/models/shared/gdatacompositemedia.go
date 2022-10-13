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
	BlobRef              *string                               `json:"blobRef"`
	Blobstore2Info       *GdataBlobstore2Info                  `json:"blobstore2Info"`
	CosmoBinaryReference *string                               `json:"cosmoBinaryReference"`
	Crc32cHash           *int64                                `json:"crc32cHash"`
	Inline               *string                               `json:"inline"`
	Length               *string                               `json:"length"`
	Md5Hash              *string                               `json:"md5Hash"`
	ObjectID             *GdataObjectID                        `json:"objectId"`
	Path                 *string                               `json:"path"`
	ReferenceType        *GdataCompositeMediaReferenceTypeEnum `json:"referenceType"`
	Sha1Hash             *string                               `json:"sha1Hash"`
}
