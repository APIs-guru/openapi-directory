package shared

type GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum string

const (
	GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnumAnd GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum = "AND"
	GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnumOr  GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum = "OR"
)

// GoogleIdentityAccesscontextmanagerV1BasicLevel
// `BasicLevel` is an `AccessLevel` using a set of recommended features.
type GoogleIdentityAccesscontextmanagerV1BasicLevel struct {
	CombiningFunction *GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum `json:"combiningFunction,omitempty"`
	Conditions        []GoogleIdentityAccesscontextmanagerV1Condition                      `json:"conditions,omitempty"`
}
