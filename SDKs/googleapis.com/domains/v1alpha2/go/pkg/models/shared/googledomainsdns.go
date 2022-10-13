package shared

type GoogleDomainsDNSDsStateEnum string

const (
	GoogleDomainsDNSDsStateEnumDsStateUnspecified   GoogleDomainsDNSDsStateEnum = "DS_STATE_UNSPECIFIED"
	GoogleDomainsDNSDsStateEnumDsRecordsUnpublished GoogleDomainsDNSDsStateEnum = "DS_RECORDS_UNPUBLISHED"
	GoogleDomainsDNSDsStateEnumDsRecordsPublished   GoogleDomainsDNSDsStateEnum = "DS_RECORDS_PUBLISHED"
)

type GoogleDomainsDNS struct {
	DsRecords   []DsRecord                   `json:"dsRecords"`
	DsState     *GoogleDomainsDNSDsStateEnum `json:"dsState"`
	NameServers []string                     `json:"nameServers"`
}
