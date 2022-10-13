package shared

type BatchWriteResponse struct {
	Status       []Status      `json:"status"`
	WriteResults []WriteResult `json:"writeResults"`
}
