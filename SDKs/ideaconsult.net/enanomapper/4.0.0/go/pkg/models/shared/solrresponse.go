package shared

type SolrResponseResponse struct {
	Docs     []map[string]interface{} `json:"docs"`
	MaxScore *float64                 `json:"maxScore"`
	NumFound *int64                   `json:"numFound"`
	Start    *int64                   `json:"start"`
}

type SolrResponseResponseHeader struct {
	QTime       *int64                 `json:"QTime"`
	Params      map[string]interface{} `json:"params"`
	Status      *int64                 `json:"status"`
	ZkConnected *bool                  `json:"zkConnected"`
}

type SolrResponse struct {
	Response       *SolrResponseResponse       `json:"response"`
	ResponseHeader *SolrResponseResponseHeader `json:"responseHeader"`
}
