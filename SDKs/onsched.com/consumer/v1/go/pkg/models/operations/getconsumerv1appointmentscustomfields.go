package operations

import (
"openapi/pkg/models/shared")

type GetConsumerV1AppointmentsCustomfieldsQueryParams struct {
    LocationID *string `queryParam:"style=form,explode=true,name=locationId"`
    
}

type GetConsumerV1AppointmentsCustomfieldsRequest struct {
    QueryParams GetConsumerV1AppointmentsCustomfieldsQueryParams 
    
}

type GetConsumerV1AppointmentsCustomfieldsResponse struct {
    ContentType string 
    CustomFieldDefinitionListViewModel *shared.CustomFieldDefinitionListViewModel 
    StatusCode int64 
    
}

