package shared

type OrderEnum string

const (
	OrderEnumAscLower  OrderEnum = "asc"
	OrderEnumDescLower OrderEnum = "desc"
	OrderEnumAscUpper  OrderEnum = "ASC"
	OrderEnumDescUpper OrderEnum = "DESC"
)
