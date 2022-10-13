package shared

type AuditRespEmbedded struct {
	Events []AuditEvent `json:"events"`
}

type AuditResp struct {
	Embedded *AuditRespEmbedded `json:"_embedded"`
	Links    *PaginationLinks   `json:"_links"`
	Page     *PaginationData    `json:"page"`
}
