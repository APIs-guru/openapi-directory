package shared



type DNSAuthorization struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DNSResourceRecord *DNSResourceRecord `json:"dnsResourceRecord,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

