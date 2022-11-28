package shared

type GoogleDomainsDNSDsStateEnum string

const (
	GoogleDomainsDNSDsStateEnumDsStateUnspecified   GoogleDomainsDNSDsStateEnum = "DS_STATE_UNSPECIFIED"
	GoogleDomainsDNSDsStateEnumDsRecordsUnpublished GoogleDomainsDNSDsStateEnum = "DS_RECORDS_UNPUBLISHED"
	GoogleDomainsDNSDsStateEnumDsRecordsPublished   GoogleDomainsDNSDsStateEnum = "DS_RECORDS_PUBLISHED"
)

// GoogleDomainsDNSInput
// Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
type GoogleDomainsDNSInput struct {
	DsState *GoogleDomainsDNSDsStateEnum `json:"dsState,omitempty"`
}

// GoogleDomainsDNS
// Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to [Google Domains](https://domains.google/).
type GoogleDomainsDNS struct {
	DsRecords   []DsRecord                   `json:"dsRecords,omitempty"`
	DsState     *GoogleDomainsDNSDsStateEnum `json:"dsState,omitempty"`
	NameServers []string                     `json:"nameServers,omitempty"`
}
