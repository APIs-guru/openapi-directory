package shared



type AuditRespEmbedded struct {
    Events []AuditEvent `json:"events,omitempty"`
    
}

type AuditResp struct {
    Embedded *AuditRespEmbedded `json:"_embedded,omitempty"`
    Links *PaginationLinks `json:"_links,omitempty"`
    Page *PaginationData `json:"page,omitempty"`
    
}

