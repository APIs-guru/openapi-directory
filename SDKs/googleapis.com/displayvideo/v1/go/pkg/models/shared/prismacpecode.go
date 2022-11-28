package shared

// PrismaCpeCode
// Google Payments Center supports searching and filtering on the component fields of this code.
type PrismaCpeCode struct {
	PrismaClientCode   *string `json:"prismaClientCode,omitempty"`
	PrismaEstimateCode *string `json:"prismaEstimateCode,omitempty"`
	PrismaProductCode  *string `json:"prismaProductCode,omitempty"`
}
