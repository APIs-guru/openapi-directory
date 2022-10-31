package shared




type LocationRuleTypeEnum string

const (
    LocationRuleTypeEnumAllow LocationRuleTypeEnum = "allow"
LocationRuleTypeEnumDisallow LocationRuleTypeEnum = "disallow"
LocationRuleTypeEnumDisappeared LocationRuleTypeEnum = "disappeared"
LocationRuleTypeEnumDebounce LocationRuleTypeEnum = "debounce"
)


