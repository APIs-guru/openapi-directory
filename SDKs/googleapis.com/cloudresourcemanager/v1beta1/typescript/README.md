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
import { CloudresourcemanagerOrganizationsGetRequest, CloudresourcemanagerOrganizationsGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudresourcemanagerOrganizationsGetRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    name: "autem",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "porro",
    alt: "json",
    callback: "voluptatem",
    fields: "expedita",
    key: "sapiente",
    oauthToken: "deserunt",
    organizationId: "aut",
    prettyPrint: false,
    quotaUser: "eos",
    uploadType: "iure",
    uploadProtocol: "voluptas",
  },
};

sdk.organizations.cloudresourcemanagerOrganizationsGet(req).then((res: CloudresourcemanagerOrganizationsGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### organizations

* `cloudresourcemanagerOrganizationsGet` - Fetches an Organization resource identified by the specified resource name.
* `cloudresourcemanagerOrganizationsGetIamPolicy` - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* `cloudresourcemanagerOrganizationsList` - Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
* `cloudresourcemanagerOrganizationsSetIamPolicy` - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* `cloudresourcemanagerOrganizationsTestIamPermissions` - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
* `cloudresourcemanagerOrganizationsUpdate` - Updates an Organization resource identified by the specified resource name.

### projects

* `cloudresourcemanagerProjectsCreate` - Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as project, folder, or organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
* `cloudresourcemanagerProjectsDelete` - Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
* `cloudresourcemanagerProjectsGet` - Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* `cloudresourcemanagerProjectsGetAncestry` - Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
* `cloudresourcemanagerProjectsGetIamPolicy` - Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. For additional information about resource structure and identification, see [Resource Names](/apis/design/resource_names).
* `cloudresourcemanagerProjectsList` - Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
* `cloudresourcemanagerProjectsSetIamPolicy` - Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
* `cloudresourcemanagerProjectsTestIamPermissions` - Returns permissions that a caller has on the specified Project.
* `cloudresourcemanagerProjectsUndelete` - Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
* `cloudresourcemanagerProjectsUpdate` - Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
