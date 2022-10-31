package operations




type GetTimestagsFilterEnum string

const (
    GetTimestagsFilterEnumDes GetTimestagsFilterEnum = "Des"
GetTimestagsFilterEnumGeo GetTimestagsFilterEnum = "Geo"
GetTimestagsFilterEnumOrg GetTimestagsFilterEnum = "Org"
GetTimestagsFilterEnumPer GetTimestagsFilterEnum = "Per"
)


type GetTimestagsQueryParams struct {
    Filter *GetTimestagsFilterEnum `queryParam:"style=form,explode=true,name=filter"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type GetTimestagsRequest struct {
    QueryParams GetTimestagsQueryParams 
    
}

type GetTimestagsResponse struct {
    ContentType string 
    GetTimestags200ApplicationJSONArrays [][]string 
    StatusCode int64 
    
}

