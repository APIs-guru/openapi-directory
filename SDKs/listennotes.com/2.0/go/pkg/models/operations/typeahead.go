package operations

import (
"openapi/pkg/models/shared")

type TypeaheadQueryParams struct {
    Q string `queryParam:"style=form,explode=true,name=q"`
    SafeMode *int64 `queryParam:"style=form,explode=true,name=safe_mode"`
    ShowGenres *int64 `queryParam:"style=form,explode=true,name=show_genres"`
    ShowPodcasts *int64 `queryParam:"style=form,explode=true,name=show_podcasts"`
    
}

type TypeaheadHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type TypeaheadRequest struct {
    QueryParams TypeaheadQueryParams 
    Headers TypeaheadHeaders 
    
}

type TypeaheadResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TypeaheadResponse *shared.TypeaheadResponse 
    
}

