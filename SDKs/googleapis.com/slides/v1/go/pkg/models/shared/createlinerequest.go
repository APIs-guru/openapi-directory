package shared

type CreateLineRequestCategoryEnum string

const (
	CreateLineRequestCategoryEnumLineCategoryUnspecified CreateLineRequestCategoryEnum = "LINE_CATEGORY_UNSPECIFIED"
	CreateLineRequestCategoryEnumStraight                CreateLineRequestCategoryEnum = "STRAIGHT"
	CreateLineRequestCategoryEnumBent                    CreateLineRequestCategoryEnum = "BENT"
	CreateLineRequestCategoryEnumCurved                  CreateLineRequestCategoryEnum = "CURVED"
)

type CreateLineRequestLineCategoryEnum string

const (
	CreateLineRequestLineCategoryEnumStraight CreateLineRequestLineCategoryEnum = "STRAIGHT"
	CreateLineRequestLineCategoryEnumBent     CreateLineRequestLineCategoryEnum = "BENT"
	CreateLineRequestLineCategoryEnumCurved   CreateLineRequestLineCategoryEnum = "CURVED"
)

type CreateLineRequest struct {
	Category          *CreateLineRequestCategoryEnum     `json:"category"`
	ElementProperties *PageElementProperties             `json:"elementProperties"`
	LineCategory      *CreateLineRequestLineCategoryEnum `json:"lineCategory"`
	ObjectID          *string                            `json:"objectId"`
}
