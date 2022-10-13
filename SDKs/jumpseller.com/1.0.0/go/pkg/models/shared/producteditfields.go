package shared

type ProductEditFieldsPackageFormatEnum string

const (
	ProductEditFieldsPackageFormatEnumBox      ProductEditFieldsPackageFormatEnum = "box"
	ProductEditFieldsPackageFormatEnumCylinder ProductEditFieldsPackageFormatEnum = "cylinder"
)

type ProductEditFieldsStatusEnum string

const (
	ProductEditFieldsStatusEnumAvailable    ProductEditFieldsStatusEnum = "available"
	ProductEditFieldsStatusEnumNotAvailable ProductEditFieldsStatusEnum = "not-available"
	ProductEditFieldsStatusEnumDisabled     ProductEditFieldsStatusEnum = "disabled"
)

type ProductEditFields struct {
	Barcode               *string                             `json:"barcode"`
	Categories            []CategoryFields                    `json:"categories"`
	Description           *string                             `json:"description"`
	Diameter              *float32                            `json:"diameter"`
	Featured              *bool                               `json:"featured"`
	GoogleProductCategory *string                             `json:"google_product_category"`
	Height                *float32                            `json:"height"`
	Length                *float32                            `json:"length"`
	MetaDescription       *string                             `json:"meta_description"`
	Name                  string                              `json:"name"`
	PackageFormat         *ProductEditFieldsPackageFormatEnum `json:"package_format"`
	PageTitle             *string                             `json:"page_title"`
	Permalink             *string                             `json:"permalink"`
	Price                 float32                             `json:"price"`
	ShippingRequired      *bool                               `json:"shipping_required"`
	Sku                   *string                             `json:"sku"`
	Status                *ProductEditFieldsStatusEnum        `json:"status"`
	Stock                 *int32                              `json:"stock"`
	StockUnlimited        *bool                               `json:"stock_unlimited"`
	Weight                *float32                            `json:"weight"`
	Width                 *float32                            `json:"width"`
}
