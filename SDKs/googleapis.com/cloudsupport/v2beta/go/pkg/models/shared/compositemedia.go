package shared

type CompositeMediaReferenceTypeEnum string

const (
	CompositeMediaReferenceTypeEnumPath                 CompositeMediaReferenceTypeEnum = "PATH"
	CompositeMediaReferenceTypeEnumBlobRef              CompositeMediaReferenceTypeEnum = "BLOB_REF"
	CompositeMediaReferenceTypeEnumInline               CompositeMediaReferenceTypeEnum = "INLINE"
	CompositeMediaReferenceTypeEnumBigstoreRef          CompositeMediaReferenceTypeEnum = "BIGSTORE_REF"
	CompositeMediaReferenceTypeEnumCosmoBinaryReference CompositeMediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
)

type CompositeMedia struct {
	BlobRef              *string                          `json:"blobRef"`
	Blobstore2Info       *Blobstore2Info                  `json:"blobstore2Info"`
	CosmoBinaryReference *string                          `json:"cosmoBinaryReference"`
	Crc32cHash           *int64                           `json:"crc32cHash"`
	Inline               *string                          `json:"inline"`
	Length               *string                          `json:"length"`
	Md5Hash              *string                          `json:"md5Hash"`
	ObjectID             *ObjectID                        `json:"objectId"`
	Path                 *string                          `json:"path"`
	ReferenceType        *CompositeMediaReferenceTypeEnum `json:"referenceType"`
	Sha1Hash             *string                          `json:"sha1Hash"`
}
