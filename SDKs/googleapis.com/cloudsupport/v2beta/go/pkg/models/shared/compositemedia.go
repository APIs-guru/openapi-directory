package shared

type CompositeMediaReferenceTypeEnum string

const (
	CompositeMediaReferenceTypeEnumPath                 CompositeMediaReferenceTypeEnum = "PATH"
	CompositeMediaReferenceTypeEnumBlobRef              CompositeMediaReferenceTypeEnum = "BLOB_REF"
	CompositeMediaReferenceTypeEnumInline               CompositeMediaReferenceTypeEnum = "INLINE"
	CompositeMediaReferenceTypeEnumBigstoreRef          CompositeMediaReferenceTypeEnum = "BIGSTORE_REF"
	CompositeMediaReferenceTypeEnumCosmoBinaryReference CompositeMediaReferenceTypeEnum = "COSMO_BINARY_REFERENCE"
)

// CompositeMedia
// # gdata.* are outside protos with mising documentation
type CompositeMedia struct {
	BlobRef              *string                          `json:"blobRef,omitempty"`
	Blobstore2Info       *Blobstore2Info                  `json:"blobstore2Info,omitempty"`
	CosmoBinaryReference *string                          `json:"cosmoBinaryReference,omitempty"`
	Crc32cHash           *int64                           `json:"crc32cHash,omitempty"`
	Inline               *string                          `json:"inline,omitempty"`
	Length               *string                          `json:"length,omitempty"`
	Md5Hash              *string                          `json:"md5Hash,omitempty"`
	ObjectID             *ObjectID                        `json:"objectId,omitempty"`
	Path                 *string                          `json:"path,omitempty"`
	ReferenceType        *CompositeMediaReferenceTypeEnum `json:"referenceType,omitempty"`
	Sha1Hash             *string                          `json:"sha1Hash,omitempty"`
}
