package operations

type GetOccupantsNearestOutputFormatOutputFormatEnum string

const (
	GetOccupantsNearestOutputFormatOutputFormatEnumJSON    GetOccupantsNearestOutputFormatOutputFormatEnum = "json"
	GetOccupantsNearestOutputFormatOutputFormatEnumGeojson GetOccupantsNearestOutputFormatOutputFormatEnum = "geojson"
	GetOccupantsNearestOutputFormatOutputFormatEnumXhtml   GetOccupantsNearestOutputFormatOutputFormatEnum = "xhtml"
	GetOccupantsNearestOutputFormatOutputFormatEnumKml     GetOccupantsNearestOutputFormatOutputFormatEnum = "kml"
	GetOccupantsNearestOutputFormatOutputFormatEnumGml     GetOccupantsNearestOutputFormatOutputFormatEnum = "gml"
	GetOccupantsNearestOutputFormatOutputFormatEnumCsv     GetOccupantsNearestOutputFormatOutputFormatEnum = "csv"
	GetOccupantsNearestOutputFormatOutputFormatEnumShpz    GetOccupantsNearestOutputFormatOutputFormatEnum = "shpz"
)

type GetOccupantsNearestOutputFormatPathParams struct {
	OutputFormat GetOccupantsNearestOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
}

type GetOccupantsNearestOutputFormatLocationDescriptorEnum string

const (
	GetOccupantsNearestOutputFormatLocationDescriptorEnumAny            GetOccupantsNearestOutputFormatLocationDescriptorEnum = "any"
	GetOccupantsNearestOutputFormatLocationDescriptorEnumAccessPoint    GetOccupantsNearestOutputFormatLocationDescriptorEnum = "accessPoint"
	GetOccupantsNearestOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsNearestOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetOccupantsNearestOutputFormatLocationDescriptorEnumParcelPoint    GetOccupantsNearestOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetOccupantsNearestOutputFormatLocationDescriptorEnumRooftopPoint   GetOccupantsNearestOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetOccupantsNearestOutputFormatLocationDescriptorEnumRoutingPoint   GetOccupantsNearestOutputFormatLocationDescriptorEnum = "routingPoint"
)

type GetOccupantsNearestOutputFormatQueryParams struct {
	Brief              *bool                                                  `queryParam:"style=form,explode=true,name=brief"`
	LocationDescriptor *GetOccupantsNearestOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	MaxDistance        *int64                                                 `queryParam:"style=form,explode=true,name=maxDistance"`
	OutputSrs          *int64                                                 `queryParam:"style=form,explode=true,name=outputSRS"`
	Point              string                                                 `queryParam:"style=form,explode=true,name=point"`
	SetBack            *int64                                                 `queryParam:"style=form,explode=true,name=setBack"`
	Tags               *string                                                `queryParam:"style=form,explode=true,name=tags"`
}

type GetOccupantsNearestOutputFormatRequest struct {
	PathParams  GetOccupantsNearestOutputFormatPathParams
	QueryParams GetOccupantsNearestOutputFormatQueryParams
}

type GetOccupantsNearestOutputFormatResponse struct {
	ContentType string
	StatusCode  int64
}
