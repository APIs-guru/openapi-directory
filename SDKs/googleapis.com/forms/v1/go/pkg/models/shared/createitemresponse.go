package shared

// CreateItemResponse
// The result of creating an item.
type CreateItemResponse struct {
	ItemID     *string  `json:"itemId,omitempty"`
	QuestionID []string `json:"questionId,omitempty"`
}
