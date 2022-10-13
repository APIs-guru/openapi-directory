package shared

type Availability struct {
	AdvertiserID          *string `json:"advertiserId"`
	AgencyID              *string `json:"agencyId"`
	AvailabilityTimestamp *string `json:"availabilityTimestamp"`
	SegmentationID        *string `json:"segmentationId"`
	SegmentationName      *string `json:"segmentationName"`
	SegmentationType      *string `json:"segmentationType"`
}
