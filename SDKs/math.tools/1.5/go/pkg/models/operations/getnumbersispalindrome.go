package operations

import (
"openapi/pkg/models/shared")

type GetNumbersIsPalindromeQueryParams struct {
    Number *int64 `queryParam:"style=form,explode=true,name=number"`
    
}

type GetNumbersIsPalindromeSecurity struct {
    XMathtoolsAPISecret shared.SchemeXMathtoolsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetNumbersIsPalindromeRequest struct {
    QueryParams GetNumbersIsPalindromeQueryParams 
    Security GetNumbersIsPalindromeSecurity 
    
}

type GetNumbersIsPalindromeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

