package shared



type CreateItemResponse struct {
    ItemID *string `json:"itemId,omitempty"`
    QuestionID []string `json:"questionId,omitempty"`
    
}

