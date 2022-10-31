package shared




type GoogleCloudDataplexV1ContentSQLScriptEngineEnum string

const (
    GoogleCloudDataplexV1ContentSQLScriptEngineEnumQueryEngineUnspecified GoogleCloudDataplexV1ContentSQLScriptEngineEnum = "QUERY_ENGINE_UNSPECIFIED"
GoogleCloudDataplexV1ContentSQLScriptEngineEnumSpark GoogleCloudDataplexV1ContentSQLScriptEngineEnum = "SPARK"
)


type GoogleCloudDataplexV1ContentSQLScript struct {
    Engine *GoogleCloudDataplexV1ContentSQLScriptEngineEnum `json:"engine,omitempty"`
    
}

