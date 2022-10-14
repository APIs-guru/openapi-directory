package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasObjectChangesListQueryParams struct {
	Action             *string `queryParam:"style=form,explode=true,name=action"`
	ActionN            *string `queryParam:"style=form,explode=true,name=action__n"`
	ChangedObjectID    *string `queryParam:"style=form,explode=true,name=changed_object_id"`
	ChangedObjectIDGt  *string `queryParam:"style=form,explode=true,name=changed_object_id__gt"`
	ChangedObjectIDGte *string `queryParam:"style=form,explode=true,name=changed_object_id__gte"`
	ChangedObjectIDLt  *string `queryParam:"style=form,explode=true,name=changed_object_id__lt"`
	ChangedObjectIDLte *string `queryParam:"style=form,explode=true,name=changed_object_id__lte"`
	ChangedObjectIDN   *string `queryParam:"style=form,explode=true,name=changed_object_id__n"`
	ChangedObjectType  *string `queryParam:"style=form,explode=true,name=changed_object_type"`
	ChangedObjectTypeN *string `queryParam:"style=form,explode=true,name=changed_object_type__n"`
	ID                 *string `queryParam:"style=form,explode=true,name=id"`
	IDGt               *string `queryParam:"style=form,explode=true,name=id__gt"`
	IDGte              *string `queryParam:"style=form,explode=true,name=id__gte"`
	IDLt               *string `queryParam:"style=form,explode=true,name=id__lt"`
	IDLte              *string `queryParam:"style=form,explode=true,name=id__lte"`
	IDN                *string `queryParam:"style=form,explode=true,name=id__n"`
	Limit              *int64  `queryParam:"style=form,explode=true,name=limit"`
	ObjectRepr         *string `queryParam:"style=form,explode=true,name=object_repr"`
	ObjectReprIc       *string `queryParam:"style=form,explode=true,name=object_repr__ic"`
	ObjectReprIe       *string `queryParam:"style=form,explode=true,name=object_repr__ie"`
	ObjectReprIew      *string `queryParam:"style=form,explode=true,name=object_repr__iew"`
	ObjectReprIsw      *string `queryParam:"style=form,explode=true,name=object_repr__isw"`
	ObjectReprN        *string `queryParam:"style=form,explode=true,name=object_repr__n"`
	ObjectReprNic      *string `queryParam:"style=form,explode=true,name=object_repr__nic"`
	ObjectReprNie      *string `queryParam:"style=form,explode=true,name=object_repr__nie"`
	ObjectReprNiew     *string `queryParam:"style=form,explode=true,name=object_repr__niew"`
	ObjectReprNisw     *string `queryParam:"style=form,explode=true,name=object_repr__nisw"`
	Offset             *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q                  *string `queryParam:"style=form,explode=true,name=q"`
	RequestID          *string `queryParam:"style=form,explode=true,name=request_id"`
	Time               *string `queryParam:"style=form,explode=true,name=time"`
	User               *string `queryParam:"style=form,explode=true,name=user"`
	UserN              *string `queryParam:"style=form,explode=true,name=user__n"`
	UserName           *string `queryParam:"style=form,explode=true,name=user_name"`
	UserNameIc         *string `queryParam:"style=form,explode=true,name=user_name__ic"`
	UserNameIe         *string `queryParam:"style=form,explode=true,name=user_name__ie"`
	UserNameIew        *string `queryParam:"style=form,explode=true,name=user_name__iew"`
	UserNameIsw        *string `queryParam:"style=form,explode=true,name=user_name__isw"`
	UserNameN          *string `queryParam:"style=form,explode=true,name=user_name__n"`
	UserNameNic        *string `queryParam:"style=form,explode=true,name=user_name__nic"`
	UserNameNie        *string `queryParam:"style=form,explode=true,name=user_name__nie"`
	UserNameNiew       *string `queryParam:"style=form,explode=true,name=user_name__niew"`
	UserNameNisw       *string `queryParam:"style=form,explode=true,name=user_name__nisw"`
}

type ExtrasObjectChangesListRequest struct {
	QueryParams ExtrasObjectChangesListQueryParams
}

type ExtrasObjectChangesList200ApplicationJSON struct {
	Count    int64                 `json:"count"`
	Next     *string               `json:"next,omitempty"`
	Previous *string               `json:"previous,omitempty"`
	Results  []shared.ObjectChange `json:"results"`
}

type ExtrasObjectChangesListResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ExtrasObjectChangesList200ApplicationJSONObject *ExtrasObjectChangesList200ApplicationJSON
}
