package operations

import (
	"openapi/pkg/models/shared"
)

type DcimCablesListQueryParams struct {
	Color       *string `queryParam:"style=form,explode=true,name=color"`
	ColorN      *string `queryParam:"style=form,explode=true,name=color__n"`
	Device      *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID    *string `queryParam:"style=form,explode=true,name=device_id"`
	ID          *string `queryParam:"style=form,explode=true,name=id"`
	IDGt        *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte       *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt        *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte       *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN         *string `queryParam:"style=form,explode=true,name=id__n"`
	Label       *string `queryParam:"style=form,explode=true,name=label"`
	LabelIc     *string `queryParam:"style=form,explode=true,name=label__ic"`
	LabelIe     *string `queryParam:"style=form,explode=true,name=label__ie"`
	LabelIew    *string `queryParam:"style=form,explode=true,name=label__iew"`
	LabelIsw    *string `queryParam:"style=form,explode=true,name=label__isw"`
	LabelN      *string `queryParam:"style=form,explode=true,name=label__n"`
	LabelNic    *string `queryParam:"style=form,explode=true,name=label__nic"`
	LabelNie    *string `queryParam:"style=form,explode=true,name=label__nie"`
	LabelNiew   *string `queryParam:"style=form,explode=true,name=label__niew"`
	LabelNisw   *string `queryParam:"style=form,explode=true,name=label__nisw"`
	Length      *string `queryParam:"style=form,explode=true,name=length"`
	LengthGt    *string `queryParam:"style=form,explode=true,name=length__gt"`
	LengthGte   *string `queryParam:"style=form,explode=true,name=length__gte"`
	LengthLt    *string `queryParam:"style=form,explode=true,name=length__lt"`
	LengthLte   *string `queryParam:"style=form,explode=true,name=length__lte"`
	LengthN     *string `queryParam:"style=form,explode=true,name=length__n"`
	LengthUnit  *string `queryParam:"style=form,explode=true,name=length_unit"`
	LengthUnitN *string `queryParam:"style=form,explode=true,name=length_unit__n"`
	Limit       *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset      *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q           *string `queryParam:"style=form,explode=true,name=q"`
	Rack        *string `queryParam:"style=form,explode=true,name=rack"`
	RackID      *string `queryParam:"style=form,explode=true,name=rack_id"`
	Site        *string `queryParam:"style=form,explode=true,name=site"`
	SiteID      *string `queryParam:"style=form,explode=true,name=site_id"`
	Status      *string `queryParam:"style=form,explode=true,name=status"`
	StatusN     *string `queryParam:"style=form,explode=true,name=status__n"`
	Tenant      *string `queryParam:"style=form,explode=true,name=tenant"`
	TenantID    *string `queryParam:"style=form,explode=true,name=tenant_id"`
	Type        *string `queryParam:"style=form,explode=true,name=type"`
	TypeN       *string `queryParam:"style=form,explode=true,name=type__n"`
}

type DcimCablesList200ApplicationJSON struct {
	Count    int64          `json:"count"`
	Next     *string        `json:"next,omitempty"`
	Previous *string        `json:"previous,omitempty"`
	Results  []shared.Cable `json:"results"`
}

type DcimCablesListRequest struct {
	QueryParams DcimCablesListQueryParams
}

type DcimCablesListResponse struct {
	ContentType                            string
	StatusCode                             int64
	DcimCablesList200ApplicationJSONObject *DcimCablesList200ApplicationJSON
}
