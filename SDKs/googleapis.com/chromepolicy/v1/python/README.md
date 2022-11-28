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
    
req = operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest(
    security=operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ChromepolicyCustomersPoliciesGroupsBatchDeletePathParams(
        customer="odit",
    ),
    query_params=operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteQueryParams(
        dollar_xgafv="2",
        access_token="ut",
        alt="media",
        callback="quod",
        fields="nihil",
        key="odit",
        oauth_token="commodi",
        pretty_print=True,
        quota_user="minima",
        upload_type="similique",
        upload_protocol="sed",
    ),
    request=shared.GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest(
        requests=[
            shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(
                policy_schema="suscipit",
                policy_target_key=shared.GoogleChromePolicyVersionsV1PolicyTargetKey(
                    additional_target_keys={
                        "unde": "est",
                        "est": "a",
                        "porro": "et",
                    },
                    target_resource="facilis",
                ),
            ),
            shared.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest(
                policy_schema="autem",
                policy_target_key=shared.GoogleChromePolicyVersionsV1PolicyTargetKey(
                    additional_target_keys={
                        "non": "corporis",
                        "similique": "perferendis",
                    },
                    target_resource="quaerat",
                ),
            ),
        ],
    ),
)
    
res = s.customers.chromepolicy_customers_policies_groups_batch_delete(req)

if res.google_protobuf_empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `chromepolicy_customers_policies_groups_batch_delete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_batch_modify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_list_group_priority_ordering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_groups_update_group_priority_ordering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_networks_define_certificate` - Creates a certificate at a specified OU for a customer.
* `chromepolicy_customers_policies_networks_define_network` - Define a new network.
* `chromepolicy_customers_policies_networks_remove_certificate` - Remove an existing certificate by guid.
* `chromepolicy_customers_policies_networks_remove_network` - Remove an existing network by guid.
* `chromepolicy_customers_policies_orgunits_batch_inherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_orgunits_batch_modify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicy_customers_policies_resolve` - Gets the resolved policy values for a list of policies that match a search query.
* `chromepolicy_customers_policy_schemas_get` - Get a specific policy schema for a customer by its resource name.
* `chromepolicy_customers_policy_schemas_list` - Gets a list of policy schemas that match a specified filter value for a given customer.

### media

* `chromepolicy_media_upload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
