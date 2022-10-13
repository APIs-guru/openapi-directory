package shared

type DNSAuthorization struct {
	CreateTime        *string            `json:"createTime"`
	Description       *string            `json:"description"`
	DNSResourceRecord *DNSResourceRecord `json:"dnsResourceRecord"`
	Domain            *string            `json:"domain"`
	Labels            map[string]string  `json:"labels"`
	Name              *string            `json:"name"`
	UpdateTime        *string            `json:"updateTime"`
}
