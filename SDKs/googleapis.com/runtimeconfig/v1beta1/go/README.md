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
    s := sdk.New()
    
    req := operations.RuntimeconfigProjectsConfigsCreateRequest{
        Security: operations.RuntimeconfigProjectsConfigsCreateSecurity{
            Option1: &operations.RuntimeconfigProjectsConfigsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.RuntimeconfigProjectsConfigsCreatePathParams{
            Parent: "debitis",
        },
        QueryParams: operations.RuntimeconfigProjectsConfigsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "sequi",
            Alt: "proto",
            Callback: "tenetur",
            Fields: "dolorem",
            Key: "a",
            OauthToken: "consectetur",
            PrettyPrint: false,
            QuotaUser: "fuga",
            RequestID: "non",
            UploadType: "consequuntur",
            UploadProtocol: "sit",
        },
        Request: &shared.RuntimeConfig{
            Description: "exercitationem",
            Name: "adipisci",
        },
    }
    
    res, err := s.Projects.RuntimeconfigProjectsConfigsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RuntimeConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RuntimeconfigProjectsConfigsCreate` - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* `RuntimeconfigProjectsConfigsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `RuntimeconfigProjectsConfigsList` - Lists all the RuntimeConfig resources within project.
* `RuntimeconfigProjectsConfigsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `RuntimeconfigProjectsConfigsVariablesCreate` - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* `RuntimeconfigProjectsConfigsVariablesList` - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* `RuntimeconfigProjectsConfigsVariablesUpdate` - Updates an existing variable with a new value.
* `RuntimeconfigProjectsConfigsVariablesWatch` - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* `RuntimeconfigProjectsConfigsWaitersCreate` - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* `RuntimeconfigProjectsConfigsWaitersDelete` - Deletes the waiter with the specified name.
* `RuntimeconfigProjectsConfigsWaitersGet` - Gets information about a single waiter.
* `RuntimeconfigProjectsConfigsWaitersList` - List waiters within the given configuration.
* `RuntimeconfigProjectsConfigsWaitersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
