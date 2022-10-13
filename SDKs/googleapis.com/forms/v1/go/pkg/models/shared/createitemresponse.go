package shared

type CreateItemResponse struct {
	ItemID     *string  `json:"itemId"`
	QuestionID []string `json:"questionId"`
}
