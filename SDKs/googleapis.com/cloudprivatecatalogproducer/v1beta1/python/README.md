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
    
req = operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest(
    security=operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams(
        parent="dolorem",
    ),
    query_params=operations.CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams(
        dollar_xgafv="1",
        access_token="quo",
        alt="json",
        callback="natus",
        fields="quo",
        key="est",
        oauth_token="molestiae",
        pretty_print=False,
        quota_user="quae",
        upload_type="quasi",
        upload_protocol="saepe",
    ),
    request=shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest(
        association=shared.GoogleCloudPrivatecatalogproducerV1beta1Association(
            create_time="sit",
            name="temporibus",
            resource="fugiat",
        ),
    ),
)
    
res = s.catalogs.cloudprivatecatalogproducer_catalogs_associations_create(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### catalogs

* `cloudprivatecatalogproducer_catalogs_associations_create` - Creates an Association instance under a given Catalog.
* `cloudprivatecatalogproducer_catalogs_associations_list` - Lists all Association resources under a catalog.
* `cloudprivatecatalogproducer_catalogs_create` - Creates a new Catalog resource.
* `cloudprivatecatalogproducer_catalogs_get_iam_policy` - Gets IAM policy for the specified Catalog.
* `cloudprivatecatalogproducer_catalogs_list` - Lists Catalog resources that the producer has access to, within the
scope of the parent resource.
* `cloudprivatecatalogproducer_catalogs_products_copy` - Copies a Product under another Catalog.
* `cloudprivatecatalogproducer_catalogs_products_create` - Creates a Product instance under a given Catalog.
* `cloudprivatecatalogproducer_catalogs_products_icons_upload` - Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.
* `cloudprivatecatalogproducer_catalogs_products_list` - Lists Product resources that the producer has access to, within the
scope of the parent catalog.
* `cloudprivatecatalogproducer_catalogs_products_versions_create` - Creates a Version instance under a given Product.
* `cloudprivatecatalogproducer_catalogs_products_versions_delete` - Hard deletes a Version.
* `cloudprivatecatalogproducer_catalogs_products_versions_get` - Returns the requested Version resource.
* `cloudprivatecatalogproducer_catalogs_products_versions_list` - Lists Version resources that the producer has access to, within the
scope of the parent Product.
* `cloudprivatecatalogproducer_catalogs_products_versions_patch` - Updates a specific Version resource.
* `cloudprivatecatalogproducer_catalogs_set_iam_policy` - Sets the IAM policy for the specified Catalog.
* `cloudprivatecatalogproducer_catalogs_test_iam_permissions` - Tests the IAM permissions for the specified Catalog.
* `cloudprivatecatalogproducer_catalogs_undelete` - Undeletes a deleted Catalog and all resources under it.

### operations

* `cloudprivatecatalogproducer_operations_cancel` - Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.
* `cloudprivatecatalogproducer_operations_list` - Lists operations that match the specified filter in the request. If the
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
