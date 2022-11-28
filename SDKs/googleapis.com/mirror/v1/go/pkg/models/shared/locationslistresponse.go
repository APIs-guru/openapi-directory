package shared

// LocationsListResponse
// A list of Locations. This is the response from the server to GET requests on the locations collection.
type LocationsListResponse struct {
	Items []Location
	Kind  *string
}
