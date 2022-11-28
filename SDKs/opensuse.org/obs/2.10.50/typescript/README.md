# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteAttributeNamespaceRequest, DeleteAttributeNamespaceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAttributeNamespaceRequest = {
  security: {
    basicAuthentication: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  pathParams: {
    namespace: "maxime",
  },
};

sdk.attributeNamespaces.deleteAttributeNamespace(req).then((res: DeleteAttributeNamespaceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attribute Namespaces

* `deleteAttributeNamespace` - Delete an attribute namespace and all attributes below.
* `deleteAttributeNamespaceMeta` - Delete an attribute namespace and all attributes below.
* `getAttribute` - List all attribute namespaces.
* `getAttributeNamespace` - List all attributes below a namespace.
* `getAttributeNamespaceMeta` - Show attribute namespace.
* `postAttributeNamespaceMeta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.
* `putAttributeNamespaceMeta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.

### Attributes

* `deleteAttributeNamespaceAttributeName` - Delete an attribute and all its values in projects or packages.
* `deleteAttributeNamespaceAttributeNameMeta` - Delete an attribute and all its values in projects or packages.
* `getAttributeNamespaceAttributeNameMeta` - Shows attribute.
* `postAttributeNamespaceAttributeNameMeta` - Change attribute data. Create an attribute if it doesn't exist.
* `putAttributeNamespaceAttributeNameMeta` - Change attribute data. Create an attribute if it doesn't exist.

### Build

* `getBuild` - Get a simple directory listing of all projects
* `getBuildProjectName` - Get a simple directory listing of all repositories for the specified project
* `getBuildProjectNameRepositoryName` - List of all architectures the specified project builds against a given repository.
* `getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo` - Show the build dependencies of packages that are part of the project.
* `getBuildProjectNameRepositoryNameArchitectureNamePackageName` - List binaries built by the sources of the specified package.
* `getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus` - Show the build status of a currently running build job.
* `getBuildProjectNameRepositoryNameArchitectureNamePackageNameReason` - Show the reason for the lastly triggered build.
* `getBuildProjectNameRepositoryNameArchitectureNameRepository` - List all binaries (produced by all packages of the given project).
* `getBuildProjectNameRepositoryNameBuildconfig` - Show the build configuration for the specified repository.
* `getBuildProjectNameResult` - Get the build results for packages, architectures and repositories of the specified project.
* `postBuildProjectName` - Apply different actions on builds/build processes of the specified project
* `getBuildProjectRepositoryArchPackageBuildinfo` - This endpoint returns information about some specific artifact
* `getBuildProjectRepositoryArchPackageHistory` - This endpoint returns the build history for a specific artifact
* `getBuildProjectRepositoryArchPackageLog` - This endpoint returns the last log file for a specific build artifact
* `getBuildProjectRepositoryArchPackageStatus` - This endpoint returns the building status for a specific artifact
* `getBuildProjectRepositoryArchitecturePackageFile` - Return a specific artifact file contents
* `getBuildProjectRepositoryArchitecturePackageFileViewFileinfo` - This endpoint returns details about an specific artifact
* `putBuildProjectRepositoryArchitecturePackageFile` - Update a specific artifact file contents

### Configuration

* `getConfiguration` - Display the configuration of this Open Build Service instance
* `putConfiguration` - Update the configuration of this Open Build Service instance

### Distributions

* `deleteDistributionsDistributionId` - Delete a distribution.
* `getDistributions` - List all distributions.
* `getDistributionsDistributionId` - Show a distribution.
* `getDistributionsIncludeRemotes` - List all distributions including remote.
* `postDistributions` - Create a distribution.
* `putDistributionsBulkReplace` - Bulk replace all distributions.
* `putDistributionsDistributionId` - Update a distribution.

### General Information

* `getAbout` - Get information about API.
* `getArchitectures` - List all known architectures.
* `getArchitecturesArchitectureName` - Show one architecture.

### Groups

* `deleteGroupGroupTitle` - Delete a group.
* `getGroup` - List available groups.
* `getGroupGroupTitle` - Read group data.
* `postGroupGroupTitle` - Modify group data.
* `putGroupGroupTitle` - Write group data.

### Issue Trackers

* `deleteIssueTrackersIssueTrackerName` - Delete an issue tracker.
* `getIssueTrackers` - Get the list of issue trackers.
* `getIssueTrackersIssueTrackerName` - Show an issue tracker.
* `getIssueTrackersIssueTrackerNameIssuesIssueName` - Show an issue of an issue tracker.
* `postIssueTrackers` - Create an issue tracker.
* `putIssueTrackersIssueTrackerName` - Update or create an issue tracker.

### Person

* `deletePersonLoginTokenId` - Delete a token of a person.
* `getPerson` - List all people.
* `getPersonLogin` - Get details about a person
* `getPersonLoginGroup` - List the groups of a person
* `getPersonLoginToken` - List the authentication tokens of a person.
* `postPerson` - Executes a command on the person endpoint.
* `postPersonLogin` - Perform changes on a registered person
* `postPersonLoginToken` - Create a new authentication token for a person.
* `postPersonRegister` - Registers a new person
* `putPersonLogin` - Update person

### Published Binaries

* `getPublished` - List all the published projects.
* `getPublishedProjectName` - List the repositories of a project with published binaries
* `getPublishedProjectNameRepositoryName` - List the content of the directory tree where the binaries are published at the level project/repository.
* `getPublishedProjectNameRepositoryNameArchitectureName` - List the content of the directory tree where the binaries are published at the level project/repository/architecture.
* `getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename` - Return the binary file itself.
* `getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmp` - Generate a ymp pattern that includes the needed repositories to install the given binary.
* `getPublishedProjectNameRepositoryNameViewEqualStatus` - Present information about the last publication of the pair project and repository.

### Request

* `deleteRequestId` - Delete a given request.
* `getRequest` - Get a simple directory listing of all requests
* `getRequestId` - Show details about a specified request.
* `getRequestViewEqualCollection` - Get a collection of requests for a specified target
* `postRequest` - Create a request
* `postRequestId` - Apply certain actions on a specified request.
* `postRequestIdCmdEqualDiff` - Get the diff for all packages affected by the request.
* `putRequestId` - Modify a given request.

### Workers

* `getWorkerArchitectureNameWorkerId` - Lists capabilites of a worker.
* `getWorkerStatus` - Lists status of workers, jobs, backend services and general statistics.
* `postWorkerCmdEqualCheckconstraints` - Lists workers which match a constraints filter.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
