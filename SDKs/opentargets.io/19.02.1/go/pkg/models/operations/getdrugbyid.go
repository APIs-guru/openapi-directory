package operations



type GetDrugByIDPathParams struct {
    DrugID string `pathParam:"style=simple,explode=false,name=DRUG_ID"`
    
}

type GetDrugByIDQueryParams struct {
    DrugID string `queryParam:"style=form,explode=true,name=drug_id"`
    
}

type GetDrugByIDRequest struct {
    PathParams GetDrugByIDPathParams 
    QueryParams GetDrugByIDQueryParams 
    
}

type GetDrugByIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

