package shared




type AgeRangeTypeAgeRangeEnum string

const (
    AgeRangeTypeAgeRangeEnumAgeRangeUnspecified AgeRangeTypeAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
AgeRangeTypeAgeRangeEnumLessThanEighteen AgeRangeTypeAgeRangeEnum = "LESS_THAN_EIGHTEEN"
AgeRangeTypeAgeRangeEnumEighteenToTwenty AgeRangeTypeAgeRangeEnum = "EIGHTEEN_TO_TWENTY"
AgeRangeTypeAgeRangeEnumTwentyOneOrOlder AgeRangeTypeAgeRangeEnum = "TWENTY_ONE_OR_OLDER"
)


type AgeRangeType struct {
    AgeRange *AgeRangeTypeAgeRangeEnum `json:"ageRange,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    
}

