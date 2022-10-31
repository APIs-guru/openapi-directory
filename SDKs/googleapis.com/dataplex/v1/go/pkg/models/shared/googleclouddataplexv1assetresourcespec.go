package shared




type GoogleCloudDataplexV1AssetResourceSpecTypeEnum string

const (
    GoogleCloudDataplexV1AssetResourceSpecTypeEnumTypeUnspecified GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "TYPE_UNSPECIFIED"
GoogleCloudDataplexV1AssetResourceSpecTypeEnumStorageBucket GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "STORAGE_BUCKET"
GoogleCloudDataplexV1AssetResourceSpecTypeEnumBigqueryDataset GoogleCloudDataplexV1AssetResourceSpecTypeEnum = "BIGQUERY_DATASET"
)


type GoogleCloudDataplexV1AssetResourceSpec struct {
    Name *string `json:"name,omitempty"`
    Type *GoogleCloudDataplexV1AssetResourceSpecTypeEnum `json:"type,omitempty"`
    
}

