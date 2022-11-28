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
    
    req := operations.FirebaserulesProjectsReleasesCreateRequest{
        Security: operations.FirebaserulesProjectsReleasesCreateSecurity{
            Option1: &operations.FirebaserulesProjectsReleasesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.FirebaserulesProjectsReleasesCreatePathParams{
            Name: "corporis",
        },
        QueryParams: operations.FirebaserulesProjectsReleasesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sed",
            Alt: "json",
            Callback: "voluptatum",
            Fields: "sapiente",
            Key: "est",
            OauthToken: "nulla",
            PrettyPrint: true,
            QuotaUser: "numquam",
            UploadType: "consequatur",
            UploadProtocol: "id",
        },
        Request: &shared.ReleaseInput{
            Name: "consequatur",
            RulesetName: "aut",
        },
    }
    
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `FirebaserulesProjectsReleasesCreate` - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
* `FirebaserulesProjectsReleasesGetExecutable` - Get the `Release` executable to use when enforcing rules.
* `FirebaserulesProjectsReleasesList` - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
* `FirebaserulesProjectsReleasesPatch` - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
* `FirebaserulesProjectsRulesetsCreate` - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
* `FirebaserulesProjectsRulesetsDelete` - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
* `FirebaserulesProjectsRulesetsGet` - Get a `Ruleset` by name including the full `Source` contents.
* `FirebaserulesProjectsRulesetsList` - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
* `FirebaserulesProjectsTest` - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
