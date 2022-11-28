package shared

// GoogleCloudChannelV1DateRange
// A representation of usage or invoice date ranges.
type GoogleCloudChannelV1DateRange struct {
	InvoiceEndDate     *GoogleTypeDate     `json:"invoiceEndDate,omitempty"`
	InvoiceStartDate   *GoogleTypeDate     `json:"invoiceStartDate,omitempty"`
	UsageEndDateTime   *GoogleTypeDateTime `json:"usageEndDateTime,omitempty"`
	UsageStartDateTime *GoogleTypeDateTime `json:"usageStartDateTime,omitempty"`
}
