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
import { GetBillingRecipientsRequest, GetBillingRecipientsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetBillingRecipientsRequest = {
  pathParams: {
    workgroupId: "aut",
  },
};

sdk.contact.getBillingRecipients(req).then((res: GetBillingRecipientsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Contact

* `getBillingRecipients` - List Billing Recipients
* `getContactList` - List the contacts
* `getContactUserInfo` - Contact Info

### Country

* `getCountryList` - List all countries

### Deactivation Reason

* `getDeactivationReasonList` - List all deactivation reasons

### Estimate

* `getEstimate` - Get a specific estimate of project
* `getEstimateList` - List the Estimates
* `postEstimate` - Create a Estimate

### Exchange Rate

* `getExchangeRateList` - Get Exchange Rate List
* `postExchangeRate` - Create Exchange Rates

### File

* `getFile` - Get File from Project.  Works for Regular and Remote Files
* `getFileTags` - List Tags from Workgroup and Project.
* `getFiles` - List Files from Project.  Works for Regular and Remote Files
* `uploadFile` - Upload File to Project.  A multipart/form-data request with a name "file"

### Invoice

* `getInvoice` - List a specific invoice of project Level
* `getInvoiceFiles` - List files of invoice Level
* `getInvoices` - List invoices by a specific order

### My Info

* `getAutomaticInvitationList` - List current user's automatic invitations info 
* `getTeamTemplateDetail` - Get current user's team template detal info 
* `getTeamTemplateList` - List current user's team templates info 
* `uploadProfileImage` - Upload Profile Image.  A multipart/form-data request with a name "file"

### Order

* `getBuyOrder` - Get a specific buy order
* `getBuyOrderList` - List the buy orders
* `getBuyOrderListOfWorkgroup` - List the buy orders of workgroup
* `getBuyOrderOfWorkgroup` - Get a specific buy order of workgroup
* `getOrder` - Get a specific buy/sell order
* `getSellOrder` - Get a specific sell order
* `getSellOrderList` - List the sell orders
* `getSellOrderListOfWorkgroup` - List the sell orders of workgrop
* `getSellOrderOfWorkgroup` - Get a specific sell order
* `postBuyOrder` - Create a quick buy order
* `putBuyOrder` - Update a specific buy order
* `putSellOrder` - Update / Accept or Reject a specific sell order

### Project

* `attachProject` - Attach children projects to specific Project
* `deleteProject` - Archieve a specific Project
* `getProject` - Get a specific Project
* `getProjectList` - List the projects
* `patchProject` - Patch a specific Project
* `postProject` - Create a Project
* `putProject` - Update a specific Project

### Project Category

* `getProjectCategoryList` - List the project categories
* `getProjectCategoryListOfClient` - List the project categories of client side

### Project Status

* `getProjectStatus` - List the project status
* `getProjectStatusOfClient` - List the project status of client

### Quote

* `getV1WorkgroupsWorkgroupIdQuotes` - List the quotes of workgroup level
* `getQuote` - Get a specific quote of project
* `getQuoteList` - List the quotes
* `getQuoteStateList` - List the quote states
* `putQuote` - Accept / Reject a Quote

### RFE

* `getRfe` - Get a specific Rfe
* `getRfeList` - List the RFES
* `postRfe` - Create a RFE

### Rfq

* `getRfq` - Get a specific Rfq
* `getRfqList` - List the rfqs

### Shipment

* `getShipment` - Get a specific shipment.
* `getShipmentList` - List shipments of project
* `postShipment` - Create a shipment
* `putShipmentLocation` - Update a specific shipment location

### Spec

* `getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId` - List a specific spec of project Level
* `getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields` - Get Spec Type Fields
* `putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId` - Update a specific Spec
* `getProductTypeListOfWorkgroup` - Get product type of workgroup level
* `getSpec` - List a specific spec of project Level
* `getSpecList` - List specs of project Level
* `getSpecProductTypeListOfWorkgroup` - Get product type of spec level by workgroupId
* `getSpecTypeFields` - Get Spec Type Fields
* `postSpec` - Create a Spec
* `postSpecProductTypeListOfWorkgroup` - Register product types for spec types
* `putSpec` - Update a specific Spec

### Spec Template

* `getSpecTemplate` - Get a specific Spec Template
* `getSpecTemplateList` - List Spec Templates of Workgroup Level 

### Task

* `taskPriorityList` - Get default task priority list
* `getCustomTaskTypesOfWg` - Get custom task types of workgroup level
* `getDefaultTaskStatusList` - Get default task status list
* `getTaskListOfProject` - Get task list of project level
* `getTaskListOfWorkgroup` - Get task list of workgroup level
* `getTaskOfProject` - Get a sepcific task of project level
* `getTaskOfWorkgroup` - Get a sepcific task of workgroup level
* `getTaskTypesOfWorkgroup` - Get task types of workgroup level
* `getWgTaskStatusListOfWorkgroup` - Get custom task status of workgroup level
* `postTaskForProject` - Create a new task

### Team Member

* `postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers` - Deprecated, please use 1.1 Version
* `deleteTeamMemberOfProject` - Delete a team member for the specific project.
* `getTeamMemberListOfClientProject` - List team member of client project side.
* `getTeamMemberListOfProject` - List team member of project.
* `postTeamMemberOfProject` - Invite a team member or all the members of team template for the specific project.

### Team Member Role

* `getMemberRoles` - List all the role options for the user

### Time Card

* `getMyTimeCard` - Get a specific my time cards
* `getMyTimeCardList` - List my time cards
* `getReceivedTimeCard` - List a specific received time cards
* `getReceivedTimeCardList` - List received time cards

### User Fields

* `getProjectHomeUserFieldListOfClient` - List projec home user fields of client workgroup
* `getProjectHomeUserFieldsList` - List projec home user fields

### Workgroup

* `getClientWorkgroupList` - List client workgroups
* `getSpecificClientWorkgroup` - Get a specific client workgroups
* `getSupplierWorkgroupDetail` - Get the specific supplier of My Group
* `getSupplierWorkgroupList` - List supplier workgroups
* `getWorkgroupDetail` - Detail workgroup info
* `getWorkgroupList` - List the workgroups
* `putWorkgroup` - Update a specific Workgroup

### Workgroup Members

* `getWorkgroupMemberInfo` - Workgroup Member Info
* `getWorkgroupMemberList` - List the workgroup members

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
