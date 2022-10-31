package shared



type EkmConnection struct {
    CreateTime *string `json:"createTime,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    ServiceResolvers []ServiceResolver `json:"serviceResolvers,omitempty"`
    
}

