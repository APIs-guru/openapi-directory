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
import { CloudprivatecatalogproducerCatalogsAssociationsCreateRequest, CloudprivatecatalogproducerCatalogsAssociationsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudprivatecatalogproducerCatalogsAssociationsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "dolorem",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "quo",
    alt: "json",
    callback: "natus",
    fields: "quo",
    key: "est",
    oauthToken: "molestiae",
    prettyPrint: false,
    quotaUser: "quae",
    uploadType: "quasi",
    uploadProtocol: "saepe",
  },
  request: {
    association: {
      createTime: "sit",
      name: "temporibus",
      resource: "fugiat",
    },
  },
};

sdk.catalogs.cloudprivatecatalogproducerCatalogsAssociationsCreate(req).then((res: CloudprivatecatalogproducerCatalogsAssociationsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### catalogs

* `cloudprivatecatalogproducerCatalogsAssociationsCreate` - Creates an Association instance under a given Catalog.
* `cloudprivatecatalogproducerCatalogsAssociationsList` - Lists all Association resources under a catalog.
* `cloudprivatecatalogproducerCatalogsCreate` - Creates a new Catalog resource.
* `cloudprivatecatalogproducerCatalogsGetIamPolicy` - Gets IAM policy for the specified Catalog.
* `cloudprivatecatalogproducerCatalogsList` - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* `cloudprivatecatalogproducerCatalogsProductsCopy` - Copies a Product under another Catalog.
* `cloudprivatecatalogproducerCatalogsProductsCreate` - Creates a Product instance under a given Catalog.
* `cloudprivatecatalogproducerCatalogsProductsIconsUpload` - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* `cloudprivatecatalogproducerCatalogsProductsList` - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* `cloudprivatecatalogproducerCatalogsProductsVersionsCreate` - Creates a Version instance under a given Product.
* `cloudprivatecatalogproducerCatalogsProductsVersionsDelete` - Hard deletes a Version.
* `cloudprivatecatalogproducerCatalogsProductsVersionsGet` - Returns the requested Version resource.
* `cloudprivatecatalogproducerCatalogsProductsVersionsList` - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* `cloudprivatecatalogproducerCatalogsProductsVersionsPatch` - Updates a specific Version resource.
* `cloudprivatecatalogproducerCatalogsSetIamPolicy` - Sets the IAM policy for the specified Catalog.
* `cloudprivatecatalogproducerCatalogsTestIamPermissions` - Tests the IAM permissions for the specified Catalog.
* `cloudprivatecatalogproducerCatalogsUndelete` - Undeletes a deleted Catalog and all resources under it.

### operations

* `cloudprivatecatalogproducerOperationsCancel` - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* `cloudprivatecatalogproducerOperationsList` - Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
