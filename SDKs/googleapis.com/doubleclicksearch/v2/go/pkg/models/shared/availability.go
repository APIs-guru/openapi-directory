package shared

type Availability struct {
	AdvertiserID          *string `json:"advertiserId,omitempty"`
	AgencyID              *string `json:"agencyId,omitempty"`
	AvailabilityTimestamp *string `json:"availabilityTimestamp,omitempty"`
	CustomerID            *string `json:"customerId,omitempty"`
	SegmentationID        *string `json:"segmentationId,omitempty"`
	SegmentationName      *string `json:"segmentationName,omitempty"`
	SegmentationType      *string `json:"segmentationType,omitempty"`
}
