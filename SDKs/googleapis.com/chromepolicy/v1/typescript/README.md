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
import { ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest, ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    customer: "odit",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "ut",
    alt: "media",
    callback: "quod",
    fields: "nihil",
    key: "odit",
    oauthToken: "commodi",
    prettyPrint: true,
    quotaUser: "minima",
    uploadType: "similique",
    uploadProtocol: "sed",
  },
  request: {
    requests: [
      {
        policySchema: "suscipit",
        policyTargetKey: {
          additionalTargetKeys: {
            "unde": "est",
            "est": "a",
            "porro": "et",
          },
          targetResource: "facilis",
        },
      },
      {
        policySchema: "autem",
        policyTargetKey: {
          additionalTargetKeys: {
            "non": "corporis",
            "similique": "perferendis",
          },
          targetResource: "quaerat",
        },
      },
    ],
  },
};

sdk.customers.chromepolicyCustomersPoliciesGroupsBatchDelete(req).then((res: ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### customers

* `chromepolicyCustomersPoliciesGroupsBatchDelete` - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsBatchModify` - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering` - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering` - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesNetworksDefineCertificate` - Creates a certificate at a specified OU for a customer.
* `chromepolicyCustomersPoliciesNetworksDefineNetwork` - Define a new network.
* `chromepolicyCustomersPoliciesNetworksRemoveCertificate` - Remove an existing certificate by guid.
* `chromepolicyCustomersPoliciesNetworksRemoveNetwork` - Remove an existing network by guid.
* `chromepolicyCustomersPoliciesOrgunitsBatchInherit` - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesOrgunitsBatchModify` - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
* `chromepolicyCustomersPoliciesResolve` - Gets the resolved policy values for a list of policies that match a search query.
* `chromepolicyCustomersPolicySchemasGet` - Get a specific policy schema for a customer by its resource name.
* `chromepolicyCustomersPolicySchemasList` - Gets a list of policy schemas that match a specified filter value for a given customer.

### media

* `chromepolicyMediaUpload` - Creates an enterprise file from the content provided by user. Returns a public download url for end user.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
