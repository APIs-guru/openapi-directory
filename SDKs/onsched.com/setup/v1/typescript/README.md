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
import { DeleteSetupV1BusinessusersIdRequest, DeleteSetupV1BusinessusersIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  }
));
    
const req: DeleteSetupV1BusinessusersIdRequest = {
  pathParams: {
    id: "omnis",
  },
};

sdk.sdk.deleteSetupV1BusinessusersId(req).then((res: DeleteSetupV1BusinessusersIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteSetupV1BusinessusersId` - Permanently deletes businessUser object.
* `deleteSetupV1CalendarsBlockId` - Delete a calendar block object
* `deleteSetupV1CalendarsId` - Deletes a calendar object.
* `deleteSetupV1CompaniesDomainsId` - Deletes a whitelisted domain for the authorized company
Returns view of domain deleted
* `deleteSetupV1CompaniesEmailTemplatesMaster` - Deletes custom master email template settings reverting to the default
* `deleteSetupV1CompaniesRegionsId` - Delete a region
* `deleteSetupV1LocationsId` - Deletes a location object.
* `deleteSetupV1LocationsIdDeleteallimages` - Deletes all images from location blob storage container
* `deleteSetupV1LocationsIdDeleteimage` - Removes a location image
* `deleteSetupV1LocationsIdEmailTemplatesMaster` - Deletes custom master email template settings reverting to the default
* `deleteSetupV1LocationsIdEmailTemplatesTemplateName` - Deletes a custom email template
* `deleteSetupV1LocationsIdGoogleServiceAccount` - Remove authorized access to all google calendar users in an organization
* `deleteSetupV1LocationsIdServices` - Deletes all location services from the specified location
* `deleteSetupV1LocationsServicesId` - Deletes a location service from the specified location
* `deleteSetupV1ResourcegroupsId` - Deletes a resource group object.
* `deleteSetupV1ResourcesAllocationsId` - Delete a resource allocation object
* `deleteSetupV1ResourcesBlockId` - Delete a resource block object
* `deleteSetupV1ResourcesId` - Deletes a resource object.
* `deleteSetupV1ResourcesIdDeleteimage` - Removes a resource image
* `deleteSetupV1ResourcesIdServices` - Deletes resource services from the specified resource
* `deleteSetupV1ServicesAllocationsId` - Delete a service allocation object
* `deleteSetupV1ServicesBlockId` - Delete a service block object
* `deleteSetupV1ServicesBookingwindowsId` - Permanently deletes bookingWindow object.
* `deleteSetupV1ServicesCalendarId`
* `deleteSetupV1ServicesId` - Deletes a service object.
* `deleteSetupV1ServicesIdDeleteimage` - Removes a service image
* `getPlanId`
* `getSetupV1Appointments` - Returns a list of appointments.
* `getSetupV1AppointmentsId` - Returns an appointment object.
* `getSetupV1Businessusers` - Returns a list of business users.
* `getSetupV1BusinessusersEmailCompanies` - Returns a list of companies for the business user.
* `getSetupV1BusinessusersId` - Returns a businessUser object.
* `getSetupV1BusinessusersPermissions` - Returns a list of system roles and permission.
* `getSetupV1Calendars` - Returns a list of calendars.
* `getSetupV1CalendarsBlocksId` - Update a calendar block
* `getSetupV1CalendarsId` - Returns a calendar object.
* `getSetupV1CalendarsIdBlocks` - Returns a list of calendar blocks.
* `getSetupV1CalendarsIdServices` - Returns a list of services linked to a calendar.
* `getSetupV1Companies` - Returns a company profile information of the authorized company
* `getSetupV1CompaniesDomains` - Returns a list of whitelisted domains for the authorized company
* `getSetupV1CompaniesDomainsId` - Returns a whitelisted domain for the authorized company
* `getSetupV1CompaniesEmailTemplates` - Returns email template list from the authorized company
* `getSetupV1CompaniesEmailTemplatesMaster` - Returns master email template settings
* `getSetupV1CompaniesEmailTemplatesTemplateName` - Returns default or custom email template from the authorized company
* `getSetupV1CompaniesRegions` - Returns a list of regions.
* `getSetupV1CompaniesRegionsId` - Get a Region
* `getSetupV1CompaniesTimezonesDate` - Returns timezone information for all supported Timezone's
* `getSetupV1Customers` - Returns a list of customers.
* `getSetupV1CustomersId` - Returns a customer object.
* `getSetupV1CustomersIdPrivacy` - Returns a customer privacy report data.
* `getSetupV1Locations` - Returns a list of business locations.
* `getSetupV1LocationsId` - Returns a business location object.
* `getSetupV1LocationsIdEmailTemplates` - Returns email template list from the authorized company
* `getSetupV1LocationsIdEmailTemplatesMaster` - Returns master email template settings
* `getSetupV1LocationsIdEmailTemplatesTemplateName` - Returns company default or custom email template from the specified location
* `getSetupV1LocationsIdGoogleServiceAccount` - Returns google service account info
* `getSetupV1LocationsIdServices` - Returns a list of location services.
* `getSetupV1LocationsServicesId` - Returns a single location services.
* `getSetupV1Resourcegroups` - Returns a list of resourcegroups.
* `getSetupV1ResourcegroupsId` - Returns a resourceGroup object.
* `getSetupV1Resources` - Returns a list of resources.
* `getSetupV1ResourcesAllocationsId` - Update a resource allocation
* `getSetupV1ResourcesBlocksId` - Update a resource block
* `getSetupV1ResourcesId` - Returns a resource object.
* `getSetupV1ResourcesIdAllocations` - Returns a list of resource allocations.
* `getSetupV1ResourcesIdAvailability` - Returns a list of weekly availability
* `getSetupV1ResourcesIdBlocks` - Returns a list of resource blocks.
* `getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress` - Returns a resource object.
* `getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress` - Returns a resource object.
* `getSetupV1ResourcesTimezones`
* `getSetupV1Services` - Returns a list of services.
* `getSetupV1ServicesAllocationsId` - Get a service allocation
* `getSetupV1ServicesBlocksId` - Get a service block
* `getSetupV1ServicesBookingwindowsId` - Get a booking window
* `getSetupV1ServicesId` - Returns a service object.
* `getSetupV1ServicesIdAllocations` - Returns a list of service allocations.
* `getSetupV1ServicesIdAvailability` - Returns a list of weekly availability
* `getSetupV1ServicesIdBlocks` - Returns a list of service blocks.
* `getSetupV1ServicesIdBookingwindows` - Returns a list of service booking windows.
* `getSetupV1ServicesIdCalendar` - Returns the linked calendar for the service
* `getSetupV1ServicesIdResources` - Returns a list of resources for the specified service.
* `postSetupV1Businessusers` - Creates a new businessUser object.
* `postSetupV1Calendars` - Creates a new calendar object.
* `postSetupV1CalendarsIdBlock` - Create a new calendar block
* `postSetupV1Companies` - Creates a company profile.
* `postSetupV1CompaniesDomains` - Creates a whitelisted domain for the authorized company
Returns view of domain created
* `postSetupV1CompaniesEmailTemplatesMaster` - Updates / creates custom master email template settings
* `postSetupV1CompaniesRegions` - Create a new region
* `postSetupV1Locations` - Creates a new location object.
* `postSetupV1LocationsBulk` - Creates new location objects.
* `postSetupV1LocationsIdEmailTemplates` - Uploads a custom email template
* `postSetupV1LocationsIdEmailTemplatesMaster` - Saves settings for the master email template
* `postSetupV1LocationsIdGoogleServiceAccount` - Authorize access to all google calendar users in an organization
* `postSetupV1LocationsIdServices` - Adds location services to the specified location
* `postSetupV1LocationsIdUploadimage` - Uploads a location image
* `postSetupV1Resourcegroups` - Creates a new resource group object.
* `postSetupV1Resources` - Creates a new resource object.
* `postSetupV1ResourcesBulk` - Creates new resource objects.
* `postSetupV1ResourcesIdAllocations` - Create a new resource allocation
* `postSetupV1ResourcesIdBlock` - Create a new resource block
* `postSetupV1ResourcesIdServices` - Adds resource services to the specified resource
* `postSetupV1ResourcesIdUploadimage` - Uploads a resource image
* `postSetupV1Services` - Creates a new service object.
* `postSetupV1ServicesBookingwindows` - Creates a new bookingWindow object.
* `postSetupV1ServicesCalendar` - Links the service to a calendar
* `postSetupV1ServicesIdAllocations` - Create a new service allocation
* `postSetupV1ServicesIdAllocationsBulk` - Create new service allocations in bulk
* `postSetupV1ServicesIdBlock` - Create a new service block
* `postSetupV1ServicesIdUploadimage` - Uploads a service image
* `putSetupV1AppointmentsIdReassignResourceResourceId` - Reassigns the appointment to the supplied resourceId
* `putSetupV1BusinessusersId` - Updates a businessUser object.
* `putSetupV1CalendarsBlockId` - Update a calendar block
* `putSetupV1CalendarsId` - Updates a calendar object.
* `putSetupV1CalendarsIdRecover` - Recovers a calendar object.
* `putSetupV1Companies` - Updates a company object.
* `putSetupV1CompaniesDomainsId` - Updates a whitelisted domain for the authorized company
Returns view of domain updated
* `putSetupV1CompaniesRegionsId` - Update a region
* `putSetupV1LocationsId` - Use this endpoint to change the scope of online booking settings
* `putSetupV1LocationsIdHolidaysHolidayIdClosed` - Sets a business holiday to open or closed.
* `putSetupV1LocationsIdRecover` - Recovers a location object.
* `putSetupV1LocationsIdSettingsScopeSettingsScope` - Changes the scope of OnlineBooking Settings.
* `putSetupV1ResourcegroupsId` - Updates a resource group object.
* `putSetupV1ResourcegroupsIdRecover` - Recovers a resource group object.
* `putSetupV1ResourcesAllocationsId` - Update a resource allocation
* `putSetupV1ResourcesBlockId` - Update a resource block
* `putSetupV1ResourcesBulk` - Updates resource objects.
* `putSetupV1ResourcesId` - Updates a resource object.
* `putSetupV1ResourcesIdAvailability` - Updates Weekly Availability
* `putSetupV1ResourcesIdReassignAppointmentsResourceId` - Reassigns appointments to another resource
* `putSetupV1ResourcesIdRecover` - Recovers a resource object.
* `putSetupV1ServicesAllocationsId` - Update a service allocation
* `putSetupV1ServicesBlockId` - Update a service block
* `putSetupV1ServicesBookingwindowsId` - Updates a bookingWindow object.
* `putSetupV1ServicesId` - Updates a service object.
* `putSetupV1ServicesIdAvailability` - Updates Weekly Availability
* `putSetupV1ServicesIdRecover` - Recovers a service object.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
