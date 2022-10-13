package operations

import (
	"openapi/pkg/models/shared"
)

type PutRealmClientScopesId1ProtocolMappersModelsId2PathParams struct {
	Id1   string `pathParam:"style=simple,explode=false,name=id1"`
	Id2   string `pathParam:"style=simple,explode=false,name=id2"`
	Realm string `pathParam:"style=simple,explode=false,name=realm"`
}

type PutRealmClientScopesId1ProtocolMappersModelsId2Request struct {
	PathParams PutRealmClientScopesId1ProtocolMappersModelsId2PathParams
	Request    shared.ProtocolMapperRepresentation `request:"mediaType=application/json"`
}

type PutRealmClientScopesId1ProtocolMappersModelsId2Response struct {
	ContentType string
	StatusCode  int64
}
