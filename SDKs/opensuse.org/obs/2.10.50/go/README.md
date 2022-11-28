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
    
    req := operations.DeleteAttributeNamespaceRequest{
        Security: operations.DeleteAttributeNamespaceSecurity{
            BasicAuthentication: shared.SchemeBasicAuthentication{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.DeleteAttributeNamespacePathParams{
            Namespace: "maxime",
        },
    }
    
    res, err := s.AttributeNamespaces.DeleteAttributeNamespace(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attribute Namespaces

* `DeleteAttributeNamespace` - Delete an attribute namespace and all attributes below.
* `DeleteAttributeNamespaceMeta` - Delete an attribute namespace and all attributes below.
* `GetAttribute` - List all attribute namespaces.
* `GetAttributeNamespace` - List all attributes below a namespace.
* `GetAttributeNamespaceMeta` - Show attribute namespace.
* `PostAttributeNamespaceMeta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.
* `PutAttributeNamespaceMeta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.

### Attributes

* `DeleteAttributeNamespaceAttributeName` - Delete an attribute and all its values in projects or packages.
* `DeleteAttributeNamespaceAttributeNameMeta` - Delete an attribute and all its values in projects or packages.
* `GetAttributeNamespaceAttributeNameMeta` - Shows attribute.
* `PostAttributeNamespaceAttributeNameMeta` - Change attribute data. Create an attribute if it doesn't exist.
* `PutAttributeNamespaceAttributeNameMeta` - Change attribute data. Create an attribute if it doesn't exist.

### Build

* `GetBuild` - Get a simple directory listing of all projects
* `GetBuildProjectName` - Get a simple directory listing of all repositories for the specified project
* `GetBuildProjectNameRepositoryName` - List of all architectures the specified project builds against a given repository.
* `GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo` - Show the build dependencies of packages that are part of the project.
* `GetBuildProjectNameRepositoryNameArchitectureNamePackageName` - List binaries built by the sources of the specified package.
* `GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus` - Show the build status of a currently running build job.
* `GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReason` - Show the reason for the lastly triggered build.
* `GetBuildProjectNameRepositoryNameArchitectureNameRepository` - List all binaries (produced by all packages of the given project).
* `GetBuildProjectNameRepositoryNameBuildconfig` - Show the build configuration for the specified repository.
* `GetBuildProjectNameResult` - Get the build results for packages, architectures and repositories of the specified project.
* `PostBuildProjectName` - Apply different actions on builds/build processes of the specified project
* `GetBuildProjectRepositoryArchPackageBuildinfo` - This endpoint returns information about some specific artifact
* `GetBuildProjectRepositoryArchPackageHistory` - This endpoint returns the build history for a specific artifact
* `GetBuildProjectRepositoryArchPackageLog` - This endpoint returns the last log file for a specific build artifact
* `GetBuildProjectRepositoryArchPackageStatus` - This endpoint returns the building status for a specific artifact
* `GetBuildProjectRepositoryArchitecturePackageFile` - Return a specific artifact file contents
* `GetBuildProjectRepositoryArchitecturePackageFileViewFileinfo` - This endpoint returns details about an specific artifact
* `PutBuildProjectRepositoryArchitecturePackageFile` - Update a specific artifact file contents

### Configuration

* `GetConfiguration` - Display the configuration of this Open Build Service instance
* `PutConfiguration` - Update the configuration of this Open Build Service instance

### Distributions

* `DeleteDistributionsDistributionID` - Delete a distribution.
* `GetDistributions` - List all distributions.
* `GetDistributionsDistributionID` - Show a distribution.
* `GetDistributionsIncludeRemotes` - List all distributions including remote.
* `PostDistributions` - Create a distribution.
* `PutDistributionsBulkReplace` - Bulk replace all distributions.
* `PutDistributionsDistributionID` - Update a distribution.

### General Information

* `GetAbout` - Get information about API.
* `GetArchitectures` - List all known architectures.
* `GetArchitecturesArchitectureName` - Show one architecture.

### Groups

* `DeleteGroupGroupTitle` - Delete a group.
* `GetGroup` - List available groups.
* `GetGroupGroupTitle` - Read group data.
* `PostGroupGroupTitle` - Modify group data.
* `PutGroupGroupTitle` - Write group data.

### Issue Trackers

* `DeleteIssueTrackersIssueTrackerName` - Delete an issue tracker.
* `GetIssueTrackers` - Get the list of issue trackers.
* `GetIssueTrackersIssueTrackerName` - Show an issue tracker.
* `GetIssueTrackersIssueTrackerNameIssuesIssueName` - Show an issue of an issue tracker.
* `PostIssueTrackers` - Create an issue tracker.
* `PutIssueTrackersIssueTrackerName` - Update or create an issue tracker.

### Person

* `DeletePersonLoginTokenID` - Delete a token of a person.
* `GetPerson` - List all people.
* `GetPersonLogin` - Get details about a person
* `GetPersonLoginGroup` - List the groups of a person
* `GetPersonLoginToken` - List the authentication tokens of a person.
* `PostPerson` - Executes a command on the person endpoint.
* `PostPersonLogin` - Perform changes on a registered person
* `PostPersonLoginToken` - Create a new authentication token for a person.
* `PostPersonRegister` - Registers a new person
* `PutPersonLogin` - Update person

### Published Binaries

* `GetPublished` - List all the published projects.
* `GetPublishedProjectName` - List the repositories of a project with published binaries
* `GetPublishedProjectNameRepositoryName` - List the content of the directory tree where the binaries are published at the level project/repository.
* `GetPublishedProjectNameRepositoryNameArchitectureName` - List the content of the directory tree where the binaries are published at the level project/repository/architecture.
* `GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename` - Return the binary file itself.
* `GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmp` - Generate a ymp pattern that includes the needed repositories to install the given binary.
* `GetPublishedProjectNameRepositoryNameViewEqualStatus` - Present information about the last publication of the pair project and repository.

### Request

* `DeleteRequestID` - Delete a given request.
* `GetRequest` - Get a simple directory listing of all requests
* `GetRequestID` - Show details about a specified request.
* `GetRequestViewEqualCollection` - Get a collection of requests for a specified target
* `PostRequest` - Create a request
* `PostRequestID` - Apply certain actions on a specified request.
* `PostRequestIDCmdEqualDiff` - Get the diff for all packages affected by the request.
* `PutRequestID` - Modify a given request.

### Workers

* `GetWorkerArchitectureNameWorkerID` - Lists capabilites of a worker.
* `GetWorkerStatus` - Lists status of workers, jobs, backend services and general statistics.
* `PostWorkerCmdEqualCheckconstraints` - Lists workers which match a constraints filter.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
