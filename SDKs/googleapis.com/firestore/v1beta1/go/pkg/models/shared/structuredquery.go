package shared

type StructuredQuery struct {
	EndAt   *Cursor              `json:"endAt"`
	From    []CollectionSelector `json:"from"`
	Limit   *int32               `json:"limit"`
	Offset  *int32               `json:"offset"`
	OrderBy []Order              `json:"orderBy"`
	Select  *Projection          `json:"select"`
	StartAt *Cursor              `json:"startAt"`
	Where   *Filter              `json:"where"`
}
