# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```go
package main

import (
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
	opts := []sdk.SDKOption{
		sdk.WithSecurity(
            shared.Security{
                BasicAuth: shared.SchemeBasicAuth{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
		),
	}

	s := sdk.New(opts...)
    
    req := operations.CreateApplicationRequest{
        Request: "a",
    }
    
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplication201ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `createApplication` - Create an application
* `deleteApplication` - Delete an application
* `getApplication` - Get an application
* `listApplication` - List available applications
* `updateApplication` - Update an application

<!-- End SDK Available Operations -->