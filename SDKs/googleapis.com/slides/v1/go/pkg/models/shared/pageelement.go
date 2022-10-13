package shared

type PageElement struct {
	Description  *string          `json:"description"`
	ElementGroup *Group           `json:"elementGroup"`
	Image        *Image           `json:"image"`
	Line         *Line            `json:"line"`
	ObjectID     *string          `json:"objectId"`
	Shape        *Shape           `json:"shape"`
	SheetsChart  *SheetsChart     `json:"sheetsChart"`
	Size         *Size            `json:"size"`
	Table        *Table           `json:"table"`
	Title        *string          `json:"title"`
	Transform    *AffineTransform `json:"transform"`
	Video        *Video           `json:"video"`
	WordArt      *WordArt         `json:"wordArt"`
}
