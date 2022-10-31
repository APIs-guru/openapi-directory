package shared



type EventCategoryDetail struct {
    CareContext CareContextDefinition `json:"careContext"`
    HiTypes []HiTypeEnumEnum `json:"hiTypes"`
    
}

