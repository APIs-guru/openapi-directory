package operations

import (
"openapi/pkg/models/shared")

type GetResourcesMediaIDSyndicateFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesMediaIDSyndicateFormatQueryParams struct {
    Autoplay *bool `queryParam:"style=form,explode=false,name=autoplay"`
    CSSClass *string `queryParam:"style=form,explode=false,name=cssClass"`
    FontSize *int32 `queryParam:"style=form,explode=false,name=font-size"`
    ImageFloat *string `queryParam:"style=form,explode=false,name=imageFloat"`
    ImageMargin *string `queryParam:"style=form,explode=false,name=imageMargin"`
    Rel *bool `queryParam:"style=form,explode=false,name=rel"`
    StripBreaks *bool `queryParam:"style=form,explode=false,name=stripBreaks"`
    StripClasses *bool `queryParam:"style=form,explode=false,name=stripClasses"`
    StripImages *bool `queryParam:"style=form,explode=false,name=stripImages"`
    StripScripts *bool `queryParam:"style=form,explode=false,name=stripScripts"`
    StripStyles *bool `queryParam:"style=form,explode=false,name=stripStyles"`
    
}

type GetResourcesMediaIDSyndicateFormatRequest struct {
    PathParams GetResourcesMediaIDSyndicateFormatPathParams 
    QueryParams GetResourcesMediaIDSyndicateFormatQueryParams 
    
}

type GetResourcesMediaIDSyndicateFormatResponse struct {
    ContentType string 
    StatusCode int64 
    SyndicateMarshallerWrapped *shared.SyndicateMarshallerWrapped 
    
}

