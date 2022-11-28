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
s.config_security(
    security=shared.Security(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    )
)
    
req = operations.DeleteSetupV1BusinessusersIDRequest(
    path_params=operations.DeleteSetupV1BusinessusersIDPathParams(
        id="omnis",
    ),
)
    
res = s.sdk.delete_setup_v1_businessusers_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_setup_v1_businessusers_id_` - Permanently deletes businessUser object.
* `delete_setup_v1_calendars_block_id_` - Delete a calendar block object
* `delete_setup_v1_calendars_id_` - Deletes a calendar object.
* `delete_setup_v1_companies_domains_id_` - Deletes a whitelisted domain for the authorized company
Returns view of domain deleted
* `delete_setup_v1_companies_email_templates_master` - Deletes custom master email template settings reverting to the default
* `delete_setup_v1_companies_regions_id_` - Delete a region
* `delete_setup_v1_locations_id_` - Deletes a location object.
* `delete_setup_v1_locations_id_deleteallimages` - Deletes all images from location blob storage container
* `delete_setup_v1_locations_id_deleteimage` - Removes a location image
* `delete_setup_v1_locations_id_email_templates_master` - Deletes custom master email template settings reverting to the default
* `delete_setup_v1_locations_id_email_templates_template_name_` - Deletes a custom email template
* `delete_setup_v1_locations_id_google_service_account` - Remove authorized access to all google calendar users in an organization
* `delete_setup_v1_locations_id_services` - Deletes all location services from the specified location
* `delete_setup_v1_locations_services_id_` - Deletes a location service from the specified location
* `delete_setup_v1_resourcegroups_id_` - Deletes a resource group object.
* `delete_setup_v1_resources_allocations_id_` - Delete a resource allocation object
* `delete_setup_v1_resources_block_id_` - Delete a resource block object
* `delete_setup_v1_resources_id_` - Deletes a resource object.
* `delete_setup_v1_resources_id_deleteimage` - Removes a resource image
* `delete_setup_v1_resources_id_services` - Deletes resource services from the specified resource
* `delete_setup_v1_services_allocations_id_` - Delete a service allocation object
* `delete_setup_v1_services_block_id_` - Delete a service block object
* `delete_setup_v1_services_bookingwindows_id_` - Permanently deletes bookingWindow object.
* `delete_setup_v1_services_calendar_id_`
* `delete_setup_v1_services_id_` - Deletes a service object.
* `delete_setup_v1_services_id_deleteimage` - Removes a service image
* `get_plan_id_`
* `get_setup_v1_appointments` - Returns a list of appointments.
* `get_setup_v1_appointments_id_` - Returns an appointment object.
* `get_setup_v1_businessusers` - Returns a list of business users.
* `get_setup_v1_businessusers_email_companies` - Returns a list of companies for the business user.
* `get_setup_v1_businessusers_id_` - Returns a businessUser object.
* `get_setup_v1_businessusers_permissions` - Returns a list of system roles and permission.
* `get_setup_v1_calendars` - Returns a list of calendars.
* `get_setup_v1_calendars_blocks_id_` - Update a calendar block
* `get_setup_v1_calendars_id_` - Returns a calendar object.
* `get_setup_v1_calendars_id_blocks` - Returns a list of calendar blocks.
* `get_setup_v1_calendars_id_services` - Returns a list of services linked to a calendar.
* `get_setup_v1_companies` - Returns a company profile information of the authorized company
* `get_setup_v1_companies_domains` - Returns a list of whitelisted domains for the authorized company
* `get_setup_v1_companies_domains_id_` - Returns a whitelisted domain for the authorized company
* `get_setup_v1_companies_email_templates` - Returns email template list from the authorized company
* `get_setup_v1_companies_email_templates_master` - Returns master email template settings
* `get_setup_v1_companies_email_templates_template_name_` - Returns default or custom email template from the authorized company
* `get_setup_v1_companies_regions` - Returns a list of regions.
* `get_setup_v1_companies_regions_id_` - Get a Region
* `get_setup_v1_companies_timezones_date_` - Returns timezone information for all supported Timezone's
* `get_setup_v1_customers` - Returns a list of customers.
* `get_setup_v1_customers_id_` - Returns a customer object.
* `get_setup_v1_customers_id_privacy` - Returns a customer privacy report data.
* `get_setup_v1_locations` - Returns a list of business locations.
* `get_setup_v1_locations_id_` - Returns a business location object.
* `get_setup_v1_locations_id_email_templates` - Returns email template list from the authorized company
* `get_setup_v1_locations_id_email_templates_master` - Returns master email template settings
* `get_setup_v1_locations_id_email_templates_template_name_` - Returns company default or custom email template from the specified location
* `get_setup_v1_locations_id_google_service_account` - Returns google service account info
* `get_setup_v1_locations_id_services` - Returns a list of location services.
* `get_setup_v1_locations_services_id_` - Returns a single location services.
* `get_setup_v1_resourcegroups` - Returns a list of resourcegroups.
* `get_setup_v1_resourcegroups_id_` - Returns a resourceGroup object.
* `get_setup_v1_resources` - Returns a list of resources.
* `get_setup_v1_resources_allocations_id_` - Update a resource allocation
* `get_setup_v1_resources_blocks_id_` - Update a resource block
* `get_setup_v1_resources_id_` - Returns a resource object.
* `get_setup_v1_resources_id_allocations` - Returns a list of resource allocations.
* `get_setup_v1_resources_id_availability` - Returns a list of weekly availability
* `get_setup_v1_resources_id_blocks` - Returns a list of resource blocks.
* `get_setup_v1_resources_id_calendar_auth_google_google_email_address_` - Returns a resource object.
* `get_setup_v1_resources_id_calendar_auth_outlook_outlook_email_address_` - Returns a resource object.
* `get_setup_v1_resources_timezones`
* `get_setup_v1_services` - Returns a list of services.
* `get_setup_v1_services_allocations_id_` - Get a service allocation
* `get_setup_v1_services_blocks_id_` - Get a service block
* `get_setup_v1_services_bookingwindows_id_` - Get a booking window
* `get_setup_v1_services_id_` - Returns a service object.
* `get_setup_v1_services_id_allocations` - Returns a list of service allocations.
* `get_setup_v1_services_id_availability` - Returns a list of weekly availability
* `get_setup_v1_services_id_blocks` - Returns a list of service blocks.
* `get_setup_v1_services_id_bookingwindows` - Returns a list of service booking windows.
* `get_setup_v1_services_id_calendar` - Returns the linked calendar for the service
* `get_setup_v1_services_id_resources` - Returns a list of resources for the specified service.
* `post_setup_v1_businessusers` - Creates a new businessUser object.
* `post_setup_v1_calendars` - Creates a new calendar object.
* `post_setup_v1_calendars_id_block` - Create a new calendar block
* `post_setup_v1_companies` - Creates a company profile.
* `post_setup_v1_companies_domains` - Creates a whitelisted domain for the authorized company
Returns view of domain created
* `post_setup_v1_companies_email_templates_master` - Updates / creates custom master email template settings
* `post_setup_v1_companies_regions` - Create a new region
* `post_setup_v1_locations` - Creates a new location object.
* `post_setup_v1_locations_bulk` - Creates new location objects.
* `post_setup_v1_locations_id_email_templates` - Uploads a custom email template
* `post_setup_v1_locations_id_email_templates_master` - Saves settings for the master email template
* `post_setup_v1_locations_id_google_service_account` - Authorize access to all google calendar users in an organization
* `post_setup_v1_locations_id_services` - Adds location services to the specified location
* `post_setup_v1_locations_id_uploadimage` - Uploads a location image
* `post_setup_v1_resourcegroups` - Creates a new resource group object.
* `post_setup_v1_resources` - Creates a new resource object.
* `post_setup_v1_resources_bulk` - Creates new resource objects.
* `post_setup_v1_resources_id_allocations` - Create a new resource allocation
* `post_setup_v1_resources_id_block` - Create a new resource block
* `post_setup_v1_resources_id_services` - Adds resource services to the specified resource
* `post_setup_v1_resources_id_uploadimage` - Uploads a resource image
* `post_setup_v1_services` - Creates a new service object.
* `post_setup_v1_services_bookingwindows` - Creates a new bookingWindow object.
* `post_setup_v1_services_calendar` - Links the service to a calendar
* `post_setup_v1_services_id_allocations` - Create a new service allocation
* `post_setup_v1_services_id_allocations_bulk` - Create new service allocations in bulk
* `post_setup_v1_services_id_block` - Create a new service block
* `post_setup_v1_services_id_uploadimage` - Uploads a service image
* `put_setup_v1_appointments_id_reassign_resource_resource_id_` - Reassigns the appointment to the supplied resourceId
* `put_setup_v1_businessusers_id_` - Updates a businessUser object.
* `put_setup_v1_calendars_block_id_` - Update a calendar block
* `put_setup_v1_calendars_id_` - Updates a calendar object.
* `put_setup_v1_calendars_id_recover` - Recovers a calendar object.
* `put_setup_v1_companies` - Updates a company object.
* `put_setup_v1_companies_domains_id_` - Updates a whitelisted domain for the authorized company
Returns view of domain updated
* `put_setup_v1_companies_regions_id_` - Update a region
* `put_setup_v1_locations_id_` - Use this endpoint to change the scope of online booking settings
* `put_setup_v1_locations_id_holidays_holiday_id_closed_` - Sets a business holiday to open or closed.
* `put_setup_v1_locations_id_recover` - Recovers a location object.
* `put_setup_v1_locations_id_settings_scope_settings_scope_` - Changes the scope of OnlineBooking Settings.
* `put_setup_v1_resourcegroups_id_` - Updates a resource group object.
* `put_setup_v1_resourcegroups_id_recover` - Recovers a resource group object.
* `put_setup_v1_resources_allocations_id_` - Update a resource allocation
* `put_setup_v1_resources_block_id_` - Update a resource block
* `put_setup_v1_resources_bulk` - Updates resource objects.
* `put_setup_v1_resources_id_` - Updates a resource object.
* `put_setup_v1_resources_id_availability` - Updates Weekly Availability
* `put_setup_v1_resources_id_reassign_appointments_resource_id_` - Reassigns appointments to another resource
* `put_setup_v1_resources_id_recover` - Recovers a resource object.
* `put_setup_v1_services_allocations_id_` - Update a service allocation
* `put_setup_v1_services_block_id_` - Update a service block
* `put_setup_v1_services_bookingwindows_id_` - Updates a bookingWindow object.
* `put_setup_v1_services_id_` - Updates a service object.
* `put_setup_v1_services_id_availability` - Updates Weekly Availability
* `put_setup_v1_services_id_recover` - Recovers a service object.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
