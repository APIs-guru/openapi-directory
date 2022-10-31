package operations



type VirtualizationVirtualMachinesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationVirtualMachinesDeleteRequest struct {
    PathParams VirtualizationVirtualMachinesDeletePathParams 
    
}

type VirtualizationVirtualMachinesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

