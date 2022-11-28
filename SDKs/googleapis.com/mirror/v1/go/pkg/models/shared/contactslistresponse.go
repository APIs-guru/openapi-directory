package shared

// ContactsListResponse
// A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
type ContactsListResponse struct {
	Items []Contact
	Kind  *string
}
