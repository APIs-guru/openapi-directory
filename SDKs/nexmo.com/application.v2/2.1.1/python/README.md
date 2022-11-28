# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    )
)
    
req = operations.CreateApplicationRequest(
    request="a",
)
    
res = s.create_application(req)

if res.create_application_201_application_json_object is not None:
    # handle response
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