package operations



type DeleteNetworkGroupPolicyPathParams struct {
    GroupPolicyID string `pathParam:"style=simple,explode=false,name=groupPolicyId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type DeleteNetworkGroupPolicyRequest struct {
    PathParams DeleteNetworkGroupPolicyPathParams 
    
}

type DeleteNetworkGroupPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

