package shared

// DeletedItem
// A deleted episode or podcast.
// An episode or a podcast could be deleted from our podcast database.
// Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
type DeletedItem struct {
	Error  *string `json:"error,omitempty"`
	ID     *string `json:"id,omitempty"`
	Status *string `json:"status,omitempty"`
	Title  *string `json:"title,omitempty"`
}
