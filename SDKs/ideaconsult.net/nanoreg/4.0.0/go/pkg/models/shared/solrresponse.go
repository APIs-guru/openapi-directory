package shared



type SolrResponseResponse struct {
    Docs []map[string]interface{} `json:"docs,omitempty"`
    MaxScore *float64 `json:"maxScore,omitempty"`
    NumFound *int64 `json:"numFound,omitempty"`
    Start *int64 `json:"start,omitempty"`
    
}

type SolrResponseResponseHeader struct {
    QTime *int64 `json:"QTime,omitempty"`
    Params map[string]interface{} `json:"params,omitempty"`
    Status *int64 `json:"status,omitempty"`
    ZkConnected *bool `json:"zkConnected,omitempty"`
    
}

type SolrResponse struct {
    Response *SolrResponseResponse `json:"response,omitempty"`
    ResponseHeader *SolrResponseResponseHeader `json:"responseHeader,omitempty"`
    
}

