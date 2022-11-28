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
import { ServiceconsumermanagementOperationsCancelRequest, ServiceconsumermanagementOperationsCancelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ServiceconsumermanagementOperationsCancelRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    name: "iusto",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "possimus",
    alt: "media",
    callback: "voluptatibus",
    fields: "labore",
    key: "rerum",
    oauthToken: "at",
    prettyPrint: true,
    quotaUser: "dolor",
    uploadType: "accusantium",
    uploadProtocol: "voluptatem",
  },
  request: {
    "non": "ex",
    "non": "est",
  },
};

sdk.operations.serviceconsumermanagementOperationsCancel(req).then((res: ServiceconsumermanagementOperationsCancelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### operations

* `serviceconsumermanagementOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `serviceconsumermanagementOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### services

* `serviceconsumermanagementServicesSearch` - Search tenancy units for a managed service.
* `serviceconsumermanagementServicesTenancyUnitsAddProject` - Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
* `serviceconsumermanagementServicesTenancyUnitsApplyProjectConfig` - Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified. Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already applied configuration changes is attempted. Operation.
* `serviceconsumermanagementServicesTenancyUnitsAttachProject` - Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
* `serviceconsumermanagementServicesTenancyUnitsCreate` - Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
* `serviceconsumermanagementServicesTenancyUnitsDelete` - Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation.
* `serviceconsumermanagementServicesTenancyUnitsDeleteProject` - Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
* `serviceconsumermanagementServicesTenancyUnitsList` - Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when creating VMs. Service producers must persist the tenant project's information after the project is created.
* `serviceconsumermanagementServicesTenancyUnitsRemoveProject` - Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
* `serviceconsumermanagementServicesTenancyUnitsUndeleteProject` - Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
