package shared




type CreateLineRequestCategoryEnum string

const (
    CreateLineRequestCategoryEnumLineCategoryUnspecified CreateLineRequestCategoryEnum = "LINE_CATEGORY_UNSPECIFIED"
CreateLineRequestCategoryEnumStraight CreateLineRequestCategoryEnum = "STRAIGHT"
CreateLineRequestCategoryEnumBent CreateLineRequestCategoryEnum = "BENT"
CreateLineRequestCategoryEnumCurved CreateLineRequestCategoryEnum = "CURVED"
)



type CreateLineRequestLineCategoryEnum string

const (
    CreateLineRequestLineCategoryEnumStraight CreateLineRequestLineCategoryEnum = "STRAIGHT"
CreateLineRequestLineCategoryEnumBent CreateLineRequestLineCategoryEnum = "BENT"
CreateLineRequestLineCategoryEnumCurved CreateLineRequestLineCategoryEnum = "CURVED"
)


type CreateLineRequest struct {
    Category *CreateLineRequestCategoryEnum `json:"category,omitempty"`
    ElementProperties *PageElementProperties `json:"elementProperties,omitempty"`
    LineCategory *CreateLineRequestLineCategoryEnum `json:"lineCategory,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    
}

