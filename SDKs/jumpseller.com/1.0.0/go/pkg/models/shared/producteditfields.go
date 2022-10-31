package shared




type ProductEditFieldsPackageFormatEnum string

const (
    ProductEditFieldsPackageFormatEnumBox ProductEditFieldsPackageFormatEnum = "box"
ProductEditFieldsPackageFormatEnumCylinder ProductEditFieldsPackageFormatEnum = "cylinder"
)



type ProductEditFieldsStatusEnum string

const (
    ProductEditFieldsStatusEnumAvailable ProductEditFieldsStatusEnum = "available"
ProductEditFieldsStatusEnumNotAvailable ProductEditFieldsStatusEnum = "not-available"
ProductEditFieldsStatusEnumDisabled ProductEditFieldsStatusEnum = "disabled"
)


type ProductEditFields struct {
    Barcode *string `json:"barcode,omitempty"`
    Categories []CategoryFields `json:"categories,omitempty"`
    Description *string `json:"description,omitempty"`
    Diameter *float32 `json:"diameter,omitempty"`
    Featured *bool `json:"featured,omitempty"`
    GoogleProductCategory *string `json:"google_product_category,omitempty"`
    Height *float32 `json:"height,omitempty"`
    Length *float32 `json:"length,omitempty"`
    MetaDescription *string `json:"meta_description,omitempty"`
    Name string `json:"name"`
    PackageFormat *ProductEditFieldsPackageFormatEnum `json:"package_format,omitempty"`
    PageTitle *string `json:"page_title,omitempty"`
    Permalink *string `json:"permalink,omitempty"`
    Price float32 `json:"price"`
    ShippingRequired *bool `json:"shipping_required,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Status *ProductEditFieldsStatusEnum `json:"status,omitempty"`
    Stock *int32 `json:"stock,omitempty"`
    StockUnlimited *bool `json:"stock_unlimited,omitempty"`
    Weight *float32 `json:"weight,omitempty"`
    Width *float32 `json:"width,omitempty"`
    
}

