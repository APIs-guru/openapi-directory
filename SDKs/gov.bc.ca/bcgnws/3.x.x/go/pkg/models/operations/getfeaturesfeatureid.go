package operations



type GetFeaturesFeatureIDPathParams struct {
    FeatureID int64 `pathParam:"style=simple,explode=false,name=featureId"`
    
}

type GetFeaturesFeatureIDRequest struct {
    PathParams GetFeaturesFeatureIDPathParams 
    
}

type GetFeaturesFeatureIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

