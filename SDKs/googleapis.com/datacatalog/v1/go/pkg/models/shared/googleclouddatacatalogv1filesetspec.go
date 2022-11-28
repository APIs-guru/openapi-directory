package shared

// GoogleCloudDatacatalogV1FilesetSpec
// Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.
type GoogleCloudDatacatalogV1FilesetSpec struct {
	DataplexFileset *GoogleCloudDatacatalogV1DataplexFilesetSpec `json:"dataplexFileset,omitempty"`
}
