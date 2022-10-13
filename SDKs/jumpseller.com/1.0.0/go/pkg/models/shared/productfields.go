package shared

type ProductFieldsPackageFormatEnum string

const (
	ProductFieldsPackageFormatEnumBox      ProductFieldsPackageFormatEnum = "box"
	ProductFieldsPackageFormatEnumCylinder ProductFieldsPackageFormatEnum = "cylinder"
)

type ProductFieldsStatusEnum string

const (
	ProductFieldsStatusEnumAvailable    ProductFieldsStatusEnum = "available"
	ProductFieldsStatusEnumNotAvailable ProductFieldsStatusEnum = "not-available"
	ProductFieldsStatusEnumDisabled     ProductFieldsStatusEnum = "disabled"
)

type ProductFields struct {
	Barcode               *string                         `json:"barcode"`
	Categories            []CategoryFields                `json:"categories"`
	CreatedAt             *string                         `json:"created_at"`
	Description           *string                         `json:"description"`
	Diameter              *float32                        `json:"diameter"`
	Discount              *float32                        `json:"discount"`
	Featured              *bool                           `json:"featured"`
	GoogleProductCategory *string                         `json:"google_product_category"`
	Height                *float32                        `json:"height"`
	ID                    *int32                          `json:"id"`
	Images                []ImageFields                   `json:"images"`
	Length                *float32                        `json:"length"`
	Name                  *string                         `json:"name"`
	PackageFormat         *ProductFieldsPackageFormatEnum `json:"package_format"`
	Permalink             *string                         `json:"permalink"`
	Price                 *float32                        `json:"price"`
	Sku                   *string                         `json:"sku"`
	Status                *ProductFieldsStatusEnum        `json:"status"`
	Stock                 *int32                          `json:"stock"`
	StockUnlimited        *bool                           `json:"stock_unlimited"`
	Variants              []VariantFields                 `json:"variants"`
	Weight                *float32                        `json:"weight"`
	Width                 *float32                        `json:"width"`
}
