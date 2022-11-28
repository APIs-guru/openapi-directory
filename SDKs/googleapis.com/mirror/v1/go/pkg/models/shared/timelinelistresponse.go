package shared

// TimelineListResponse
// A list of timeline items. This is the response from the server to GET requests on the timeline collection.
type TimelineListResponse struct {
	Items         []TimelineItem
	Kind          *string
	NextPageToken *string
}
