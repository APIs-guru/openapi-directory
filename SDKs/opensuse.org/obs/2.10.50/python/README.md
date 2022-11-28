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
    
req = operations.DeleteAttributeNamespaceRequest(
    security=operations.DeleteAttributeNamespaceSecurity(
        basic_authentication=shared.SchemeBasicAuthentication(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.DeleteAttributeNamespacePathParams(
        namespace="maxime",
    ),
)
    
res = s.attribute_namespaces.delete_attribute_namespace_(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Attribute Namespaces

* `delete_attribute_namespace_` - Delete an attribute namespace and all attributes below.
* `delete_attribute_namespace_meta` - Delete an attribute namespace and all attributes below.
* `get_attribute` - List all attribute namespaces.
* `get_attribute_namespace_` - List all attributes below a namespace.
* `get_attribute_namespace_meta` - Show attribute namespace.
* `post_attribute_namespace_meta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.
* `put_attribute_namespace_meta` - Change attribute namespace. Create an attribute namespace if it doesn't exist.

### Attributes

* `delete_attribute_namespace_attribute_name_` - Delete an attribute and all its values in projects or packages.
* `delete_attribute_namespace_attribute_name_meta` - Delete an attribute and all its values in projects or packages.
* `get_attribute_namespace_attribute_name_meta` - Shows attribute.
* `post_attribute_namespace_attribute_name_meta` - Change attribute data. Create an attribute if it doesn't exist.
* `put_attribute_namespace_attribute_name_meta` - Change attribute data. Create an attribute if it doesn't exist.

### Build

* `get_build` - Get a simple directory listing of all projects
* `get_build_project_name_` - Get a simple directory listing of all repositories for the specified project
* `get_build_project_name_repository_name_` - List of all architectures the specified project builds against a given repository.
* `get_build_project_name_repository_name_architecture_name_builddepinfo` - Show the build dependencies of packages that are part of the project.
* `get_build_project_name_repository_name_architecture_name_package_name_` - List binaries built by the sources of the specified package.
* `get_build_project_name_repository_name_architecture_name_package_name_jobstatus` - Show the build status of a currently running build job.
* `get_build_project_name_repository_name_architecture_name_package_name_reason` - Show the reason for the lastly triggered build.
* `get_build_project_name_repository_name_architecture_name_repository` - List all binaries (produced by all packages of the given project).
* `get_build_project_name_repository_name_buildconfig` - Show the build configuration for the specified repository.
* `get_build_project_name_result` - Get the build results for packages, architectures and repositories of the specified project.
* `post_build_project_name_` - Apply different actions on builds/build processes of the specified project
* `get_build_project_repository_arch_package_buildinfo` - This endpoint returns information about some specific artifact
* `get_build_project_repository_arch_package_history` - This endpoint returns the build history for a specific artifact
* `get_build_project_repository_arch_package_log` - This endpoint returns the last log file for a specific build artifact
* `get_build_project_repository_arch_package_status` - This endpoint returns the building status for a specific artifact
* `get_build_project_repository_architecture_package_file` - Return a specific artifact file contents
* `get_build_project_repository_architecture_package_file_view_fileinfo` - This endpoint returns details about an specific artifact
* `put_build_project_repository_architecture_package_file` - Update a specific artifact file contents

### Configuration

* `get_configuration` - Display the configuration of this Open Build Service instance
* `put_configuration` - Update the configuration of this Open Build Service instance

### Distributions

* `delete_distributions_distribution_id_` - Delete a distribution.
* `get_distributions` - List all distributions.
* `get_distributions_distribution_id_` - Show a distribution.
* `get_distributions_include_remotes` - List all distributions including remote.
* `post_distributions` - Create a distribution.
* `put_distributions_bulk_replace` - Bulk replace all distributions.
* `put_distributions_distribution_id_` - Update a distribution.

### General Information

* `get_about` - Get information about API.
* `get_architectures` - List all known architectures.
* `get_architectures_architecture_name_` - Show one architecture.

### Groups

* `delete_group_group_title_` - Delete a group.
* `get_group` - List available groups.
* `get_group_group_title_` - Read group data.
* `post_group_group_title_` - Modify group data.
* `put_group_group_title_` - Write group data.

### Issue Trackers

* `delete_issue_trackers_issue_tracker_name_` - Delete an issue tracker.
* `get_issue_trackers` - Get the list of issue trackers.
* `get_issue_trackers_issue_tracker_name_` - Show an issue tracker.
* `get_issue_trackers_issue_tracker_name_issues_issue_name_` - Show an issue of an issue tracker.
* `post_issue_trackers` - Create an issue tracker.
* `put_issue_trackers_issue_tracker_name_` - Update or create an issue tracker.

### Person

* `delete_person_login_token_id_` - Delete a token of a person.
* `get_person` - List all people.
* `get_person_login_` - Get details about a person
* `get_person_login_group` - List the groups of a person
* `get_person_login_token` - List the authentication tokens of a person.
* `post_person` - Executes a command on the person endpoint.
* `post_person_login_` - Perform changes on a registered person
* `post_person_login_token` - Create a new authentication token for a person.
* `post_person_register` - Registers a new person
* `put_person_login_` - Update person

### Published Binaries

* `get_published` - List all the published projects.
* `get_published_project_name_` - List the repositories of a project with published binaries
* `get_published_project_name_repository_name_` - List the content of the directory tree where the binaries are published at the level project/repository.
* `get_published_project_name_repository_name_architecture_name_` - List the content of the directory tree where the binaries are published at the level project/repository/architecture.
* `get_published_project_name_repository_name_architecture_name_binary_filename_` - Return the binary file itself.
* `get_published_project_name_repository_name_architecture_name_binary_filename_view_equal_ymp` - Generate a ymp pattern that includes the needed repositories to install the given binary.
* `get_published_project_name_repository_name_view_equal_status` - Present information about the last publication of the pair project and repository.

### Request

* `delete_request_id_` - Delete a given request.
* `get_request` - Get a simple directory listing of all requests
* `get_request_id_` - Show details about a specified request.
* `get_request_view_equal_collection` - Get a collection of requests for a specified target
* `post_request` - Create a request
* `post_request_id_` - Apply certain actions on a specified request.
* `post_request_id_cmd_equal_diff` - Get the diff for all packages affected by the request.
* `put_request_id_` - Modify a given request.

### Workers

* `get_worker_architecture_name_worker_id_` - Lists capabilites of a worker.
* `get_worker_status` - Lists status of workers, jobs, backend services and general statistics.
* `post_worker_cmd_equal_checkconstraints` - Lists workers which match a constraints filter.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
