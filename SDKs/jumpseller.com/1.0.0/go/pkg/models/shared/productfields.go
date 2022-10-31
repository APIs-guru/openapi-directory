package shared




type ProductFieldsPackageFormatEnum string

const (
    ProductFieldsPackageFormatEnumBox ProductFieldsPackageFormatEnum = "box"
ProductFieldsPackageFormatEnumCylinder ProductFieldsPackageFormatEnum = "cylinder"
)



type ProductFieldsStatusEnum string

const (
    ProductFieldsStatusEnumAvailable ProductFieldsStatusEnum = "available"
ProductFieldsStatusEnumNotAvailable ProductFieldsStatusEnum = "not-available"
ProductFieldsStatusEnumDisabled ProductFieldsStatusEnum = "disabled"
)


type ProductFields struct {
    Barcode *string `json:"barcode,omitempty"`
    Categories []CategoryFields `json:"categories,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    Diameter *float32 `json:"diameter,omitempty"`
    Discount *float32 `json:"discount,omitempty"`
    Featured *bool `json:"featured,omitempty"`
    GoogleProductCategory *string `json:"google_product_category,omitempty"`
    Height *float32 `json:"height,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Images []ImageFields `json:"images,omitempty"`
    Length *float32 `json:"length,omitempty"`
    Name *string `json:"name,omitempty"`
    PackageFormat *ProductFieldsPackageFormatEnum `json:"package_format,omitempty"`
    Permalink *string `json:"permalink,omitempty"`
    Price *float32 `json:"price,omitempty"`
    Sku *string `json:"sku,omitempty"`
    Status *ProductFieldsStatusEnum `json:"status,omitempty"`
    Stock *int32 `json:"stock,omitempty"`
    StockUnlimited *bool `json:"stock_unlimited,omitempty"`
    Variants []VariantFields `json:"variants,omitempty"`
    Weight *float32 `json:"weight,omitempty"`
    Width *float32 `json:"width,omitempty"`
    
}

