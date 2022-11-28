

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://onsched.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_setup_v1_businessusers_id_(self, request: operations.DeleteSetupV1BusinessusersIDRequest) -> operations.DeleteSetupV1BusinessusersIDResponse:
        r"""Permanently deletes businessUser object.
        Use this endpoint to permanently delete a businessUser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_setup_v1_calendars_block_id_(self, request: operations.DeleteSetupV1CalendarsBlockIDRequest) -> operations.DeleteSetupV1CalendarsBlockIDResponse:
        r"""Delete a calendar block object
        Deletes a calendar block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def delete_setup_v1_calendars_id_(self, request: operations.DeleteSetupV1CalendarsIDRequest) -> operations.DeleteSetupV1CalendarsIDResponse:
        r"""Deletes a calendar object.
        Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def delete_setup_v1_companies_domains_id_(self, request: operations.DeleteSetupV1CompaniesDomainsIDRequest) -> operations.DeleteSetupV1CompaniesDomainsIDResponse:
        r"""Deletes a whitelisted domain for the authorized company
        Returns view of domain deleted
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def delete_setup_v1_companies_email_templates_master(self) -> operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Deletes custom master email template settings reverting to the default
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def delete_setup_v1_companies_regions_id_(self, request: operations.DeleteSetupV1CompaniesRegionsIDRequest) -> operations.DeleteSetupV1CompaniesRegionsIDResponse:
        r"""Delete a region
        Deletes a region.
        
        If the region is related to any business locations it cannot be deleted
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def delete_setup_v1_locations_id_(self, request: operations.DeleteSetupV1LocationsIDRequest) -> operations.DeleteSetupV1LocationsIDResponse:
        r"""Deletes a location object.
        Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_id_deleteallimages(self, request: operations.DeleteSetupV1LocationsIDDeleteallimagesRequest) -> operations.DeleteSetupV1LocationsIDDeleteallimagesResponse:
        r"""Deletes all images from location blob storage container
        An option exists to use upper case for matching the subdirectory name
        Legacy apps stored pics using upper case externalId. Api uses lower case names.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteallimages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteallimagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.delete_setup_v1_locations_id_deleteallimages_200_application_json_boolean = out

        return res

    
    def delete_setup_v1_locations_id_deleteimage(self, request: operations.DeleteSetupV1LocationsIDDeleteimageRequest) -> operations.DeleteSetupV1LocationsIDDeleteimageResponse:
        r"""Removes a location image
        Use this endpoint to delete a previously uploaded location image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_id_email_templates_master(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Deletes custom master email template settings reverting to the default
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def delete_setup_v1_locations_id_email_templates_template_name_(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        r"""Deletes a custom email template
        Use this endpoint to remove a custom email template. 
        
        Custom email templates created in the primary location are company scope and inherited by all locations
        unless overriden in a location. Templates created in any location other than the primary apply to that location only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def delete_setup_v1_locations_id_google_service_account(self, request: operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Remove authorized access to all google calendar users in an organization
        Use this endpoint to remove authorized access to all google calendar users.
        Calendars will no longer be synced for resources
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_setup_v1_locations_id_services(self, request: operations.DeleteSetupV1LocationsIDServicesRequest) -> operations.DeleteSetupV1LocationsIDServicesResponse:
        r"""Deletes all location services from the specified location
        Use this endpoint to delete all location services for a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_locations_services_id_(self, request: operations.DeleteSetupV1LocationsServicesIDRequest) -> operations.DeleteSetupV1LocationsServicesIDResponse:
        r"""Deletes a location service from the specified location
        Use this endpoint to delete a location service for a location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def delete_setup_v1_resourcegroups_id_(self, request: operations.DeleteSetupV1ResourcegroupsIDRequest) -> operations.DeleteSetupV1ResourcegroupsIDResponse:
        r"""Deletes a resource group object.
        Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def delete_setup_v1_resources_allocations_id_(self, request: operations.DeleteSetupV1ResourcesAllocationsIDRequest) -> operations.DeleteSetupV1ResourcesAllocationsIDResponse:
        r"""Delete a resource allocation object
        Deletes a resource allocation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_resources_block_id_(self, request: operations.DeleteSetupV1ResourcesBlockIDRequest) -> operations.DeleteSetupV1ResourcesBlockIDResponse:
        r"""Delete a resource block object
        Deletes a resource block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_resources_id_(self, request: operations.DeleteSetupV1ResourcesIDRequest) -> operations.DeleteSetupV1ResourcesIDResponse:
        r"""Deletes a resource object.
        Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def delete_setup_v1_resources_id_deleteimage(self, request: operations.DeleteSetupV1ResourcesIDDeleteimageRequest) -> operations.DeleteSetupV1ResourcesIDDeleteimageResponse:
        r"""Removes a resource image
        Use this endpoint to delete a previously uploaded resource image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def delete_setup_v1_resources_id_services(self, request: operations.DeleteSetupV1ResourcesIDServicesRequest) -> operations.DeleteSetupV1ResourcesIDServicesResponse:
        r"""Deletes resource services from the specified resource
        Use this endpoint to delete all resource services for a resource
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def delete_setup_v1_services_allocations_id_(self, request: operations.DeleteSetupV1ServicesAllocationsIDRequest) -> operations.DeleteSetupV1ServicesAllocationsIDResponse:
        r"""Delete a service allocation object
        Deletes a service allocation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def delete_setup_v1_services_block_id_(self, request: operations.DeleteSetupV1ServicesBlockIDRequest) -> operations.DeleteSetupV1ServicesBlockIDResponse:
        r"""Delete a service block object
        Deletes a service block.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def delete_setup_v1_services_bookingwindows_id_(self, request: operations.DeleteSetupV1ServicesBookingwindowsIDRequest) -> operations.DeleteSetupV1ServicesBookingwindowsIDResponse:
        r"""Permanently deletes bookingWindow object.
        Use this endpoint to permanently delete a bookingWindow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_setup_v1_services_calendar_id_(self, request: operations.DeleteSetupV1ServicesCalendarIDRequest) -> operations.DeleteSetupV1ServicesCalendarIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/calendar/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesCalendarIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def delete_setup_v1_services_id_(self, request: operations.DeleteSetupV1ServicesIDRequest) -> operations.DeleteSetupV1ServicesIDResponse:
        r"""Deletes a service object.
        Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def delete_setup_v1_services_id_deleteimage(self, request: operations.DeleteSetupV1ServicesIDDeleteimageRequest) -> operations.DeleteSetupV1ServicesIDDeleteimageResponse:
        r"""Removes a service image
        Use this endpoint to delete a previously uploaded service image.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/deleteimage", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_plan_id_(self, request: operations.GetPlanIDRequest) -> operations.GetPlanIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{planId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlanIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_setup_v1_appointments(self, request: operations.GetSetupV1AppointmentsRequest) -> operations.GetSetupV1AppointmentsResponse:
        r"""Returns a list of appointments.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/appointments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.appointment_list_view_model = out

        return res

    
    def get_setup_v1_appointments_id_(self, request: operations.GetSetupV1AppointmentsIDRequest) -> operations.GetSetupV1AppointmentsIDResponse:
        r"""Returns an appointment object.
        The result returned is a single appointment object. A valid id is required to find the appointment. 
        
        Find appointment id's using the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def get_setup_v1_businessusers(self, request: operations.GetSetupV1BusinessusersRequest) -> operations.GetSetupV1BusinessusersResponse:
        r"""Returns a list of business users.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_user_list_view_model = out

        return res

    
    def get_setup_v1_businessusers_email_companies(self, request: operations.GetSetupV1BusinessusersEmailCompaniesRequest) -> operations.GetSetupV1BusinessusersEmailCompaniesResponse:
        r"""Returns a list of companies for the business user.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{email}/companies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersEmailCompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCompanyListViewModel])
                res.authorized_company_list_view_model = out

        return res

    
    def get_setup_v1_businessusers_id_(self, request: operations.GetSetupV1BusinessusersIDRequest) -> operations.GetSetupV1BusinessusersIDResponse:
        r"""Returns a businessUser object.
        The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    def get_setup_v1_businessusers_permissions(self, request: operations.GetSetupV1BusinessusersPermissionsRequest) -> operations.GetSetupV1BusinessusersPermissionsResponse:
        r"""Returns a list of system roles and permission.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers/permissions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_permission_list_view_model = out

        return res

    
    def get_setup_v1_calendars(self, request: operations.GetSetupV1CalendarsRequest) -> operations.GetSetupV1CalendarsResponse:
        r"""Returns a list of calendars.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.schedule_list_view_model = out

        return res

    
    def get_setup_v1_calendars_blocks_id_(self, request: operations.GetSetupV1CalendarsBlocksIDRequest) -> operations.GetSetupV1CalendarsBlocksIDResponse:
        r"""Update a calendar block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def get_setup_v1_calendars_id_(self, request: operations.GetSetupV1CalendarsIDRequest) -> operations.GetSetupV1CalendarsIDResponse:
        r"""Returns a calendar object.
        The result returned is a single calendar object. An id is required to find the calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def get_setup_v1_calendars_id_blocks(self, request: operations.GetSetupV1CalendarsIDBlocksRequest) -> operations.GetSetupV1CalendarsIDBlocksResponse:
        r"""Returns a list of calendar blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.calendar_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_calendars_id_services(self, request: operations.GetSetupV1CalendarsIDServicesRequest) -> operations.GetSetupV1CalendarsIDServicesResponse:
        r"""Returns a list of services linked to a calendar.
        The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def get_setup_v1_companies(self) -> operations.GetSetupV1CompaniesResponse:
        r"""Returns a company profile information of the authorized company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def get_setup_v1_companies_domains(self) -> operations.GetSetupV1CompaniesDomainsResponse:
        r"""Returns a list of whitelisted domains for the authorized company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainListViewModel])
                res.company_domain_list_view_model = out

        return res

    
    def get_setup_v1_companies_domains_id_(self, request: operations.GetSetupV1CompaniesDomainsIDRequest) -> operations.GetSetupV1CompaniesDomainsIDResponse:
        r"""Returns a whitelisted domain for the authorized company
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates(self) -> operations.GetSetupV1CompaniesEmailTemplatesResponse:
        r"""Returns email template list from the authorized company
        Returns a list of email templates that may be customized
        If the template has been customized, the customized property is true.
        The scope parameter indicates if the email template has been customized
        at Business Location level or Company level.
        This endpoint returns only company level templates so the scope is always company
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates_master(self) -> operations.GetSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Returns master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def get_setup_v1_companies_email_templates_template_name_(self, request: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
        r"""Returns default or custom email template from the authorized company
        The default email template is returned when a custom template is not found
        The response content is in html format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def get_setup_v1_companies_regions(self, request: operations.GetSetupV1CompaniesRegionsRequest) -> operations.GetSetupV1CompaniesRegionsResponse:
        r"""Returns a list of regions.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.region_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_companies_regions_id_(self, request: operations.GetSetupV1CompaniesRegionsIDRequest) -> operations.GetSetupV1CompaniesRegionsIDResponse:
        r"""Get a Region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def get_setup_v1_companies_timezones_date_(self, request: operations.GetSetupV1CompaniesTimezonesDateRequest) -> operations.GetSetupV1CompaniesTimezonesDateResponse:
        r"""Returns timezone information for all supported Timezone's
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/timezones/{date}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesTimezonesDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimezoneViewModel])
                res.timezone_view_model = out

        return res

    
    def get_setup_v1_customers(self, request: operations.GetSetupV1CustomersRequest) -> operations.GetSetupV1CustomersResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_list_view_model = out

        return res

    
    def get_setup_v1_customers_id_(self, request: operations.GetSetupV1CustomersIDRequest) -> operations.GetSetupV1CustomersIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def get_setup_v1_customers_id_privacy(self, request: operations.GetSetupV1CustomersIDPrivacyRequest) -> operations.GetSetupV1CustomersIDPrivacyResponse:
        r"""Returns a customer privacy report data.
        The result returned contains customer data and customer appointments data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}/privacy", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDPrivacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_privacy_view_model = out

        return res

    
    def get_setup_v1_locations(self, request: operations.GetSetupV1LocationsRequest) -> operations.GetSetupV1LocationsResponse:
        r"""Returns a list of business locations.
        Use this api end point if you have multiple business locations in your company.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.location_list_view_model = out

        return res

    
    def get_setup_v1_locations_id_(self, request: operations.GetSetupV1LocationsIDRequest) -> operations.GetSetupV1LocationsIDResponse:
        r"""Returns a business location object.
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates(self, request: operations.GetSetupV1LocationsIDEmailTemplatesRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesResponse:
        r"""Returns email template list from the authorized company
        Returns a list of email templates that may be customized
        If the template has been customized, the customized property is true.
        The scope parameter indicates if the email template has been customized
        at Business Location level or Company level.
        Only when querying the primary business location will company scope
        customized templates display. Otherwise, the scope shows if a template has been customized
        at the business location level.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates_master(self, request: operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Returns master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def get_setup_v1_locations_id_email_templates_template_name_(self, request: operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        r"""Returns company default or custom email template from the specified location
        These are custom email templates defined with Business Scope at a location other than the primary.
        The default email template is returned when a custom email template is not found.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def get_setup_v1_locations_id_google_service_account(self, request: operations.GetSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.GetSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Returns google service account info
        This endpoint will not go to production. It is temporary.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    def get_setup_v1_locations_id_services(self, request: operations.GetSetupV1LocationsIDServicesRequest) -> operations.GetSetupV1LocationsIDServicesResponse:
        r"""Returns a list of location services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_service_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_locations_services_id_(self, request: operations.GetSetupV1LocationsServicesIDRequest) -> operations.GetSetupV1LocationsServicesIDResponse:
        r"""Returns a single location services.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessServiceViewModel])
                res.business_service_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resourcegroups(self, request: operations.GetSetupV1ResourcegroupsRequest) -> operations.GetSetupV1ResourcegroupsResponse:
        r"""Returns a list of resourcegroups.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_group_list_view_model = out

        return res

    
    def get_setup_v1_resourcegroups_id_(self, request: operations.GetSetupV1ResourcegroupsIDRequest) -> operations.GetSetupV1ResourcegroupsIDResponse:
        r"""Returns a resourceGroup object.
        The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def get_setup_v1_resources(self, request: operations.GetSetupV1ResourcesRequest) -> operations.GetSetupV1ResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_allocations_id_(self, request: operations.GetSetupV1ResourcesAllocationsIDRequest) -> operations.GetSetupV1ResourcesAllocationsIDResponse:
        r"""Update a resource allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAllocationViewModel])
                res.resource_allocation_view_model = out

        return res

    
    def get_setup_v1_resources_blocks_id_(self, request: operations.GetSetupV1ResourcesBlocksIDRequest) -> operations.GetSetupV1ResourcesBlocksIDResponse:
        r"""Update a resource block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def get_setup_v1_resources_id_(self, request: operations.GetSetupV1ResourcesIDRequest) -> operations.GetSetupV1ResourcesIDResponse:
        r"""Returns a resource object.
        The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def get_setup_v1_resources_id_allocations(self, request: operations.GetSetupV1ResourcesIDAllocationsRequest) -> operations.GetSetupV1ResourcesIDAllocationsResponse:
        r"""Returns a list of resource allocations.
        Resource allocations allow you to specify explicitly the times you are available as opposed to 
        generating resource availability from the times that are not unavailable.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_allocation_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_id_availability(self, request: operations.GetSetupV1ResourcesIDAvailabilityRequest) -> operations.GetSetupV1ResourcesIDAvailabilityResponse:
        r"""Returns a list of weekly availability
        Use this endpoint to get weekly availability for a resource. The displayed
        available times represent the resource timezone. The resource timezone can
        be set to any world timezone. By default it is set to the Business timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    def get_setup_v1_resources_id_blocks(self, request: operations.GetSetupV1ResourcesIDBlocksRequest) -> operations.GetSetupV1ResourcesIDBlocksResponse:
        r"""Returns a list of resource blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_resources_id_calendar_auth_google_google_email_address_(self, request: operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressRequest) -> operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse:
        r"""Returns a resource object.
        The result returned contains the google calendar authorization url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    def get_setup_v1_resources_id_calendar_auth_outlook_outlook_email_address_(self, request: operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest) -> operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse:
        r"""Returns a resource object.
        The result returned contains the outlook calendar authorization url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    def get_setup_v1_resources_timezones(self) -> operations.GetSetupV1ResourcesTimezonesResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/timezones"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesTimezonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemTimezoneViewModel])
                res.system_timezone_view_model = out

        return res

    
    def get_setup_v1_services(self, request: operations.GetSetupV1ServicesRequest) -> operations.GetSetupV1ServicesResponse:
        r"""Returns a list of services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def get_setup_v1_services_allocations_id_(self, request: operations.GetSetupV1ServicesAllocationsIDRequest) -> operations.GetSetupV1ServicesAllocationsIDResponse:
        r"""Get a service allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def get_setup_v1_services_blocks_id_(self, request: operations.GetSetupV1ServicesBlocksIDRequest) -> operations.GetSetupV1ServicesBlocksIDResponse:
        r"""Get a service block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/blocks/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def get_setup_v1_services_bookingwindows_id_(self, request: operations.GetSetupV1ServicesBookingwindowsIDRequest) -> operations.GetSetupV1ServicesBookingwindowsIDResponse:
        r"""Get a booking window
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def get_setup_v1_services_id_(self, request: operations.GetSetupV1ServicesIDRequest) -> operations.GetSetupV1ServicesIDResponse:
        r"""Returns a service object.
        The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_setup_v1_services_id_allocations(self, request: operations.GetSetupV1ServicesIDAllocationsRequest) -> operations.GetSetupV1ServicesIDAllocationsResponse:
        r"""Returns a list of service allocations.
        This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
        against the service. 
        
        You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
        pass in the service id.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_allocation_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_availability(self, request: operations.GetSetupV1ServicesIDAvailabilityRequest) -> operations.GetSetupV1ServicesIDAvailabilityResponse:
        r"""Returns a list of weekly availability
        Use this endpoint to get weekly availability for a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    def get_setup_v1_services_id_blocks(self, request: operations.GetSetupV1ServicesIDBlocksRequest) -> operations.GetSetupV1ServicesIDBlocksResponse:
        r"""Returns a list of service blocks.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDBlocksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_block_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_bookingwindows(self, request: operations.GetSetupV1ServicesIDBookingwindowsRequest) -> operations.GetSetupV1ServicesIDBookingwindowsResponse:
        r"""Returns a list of service booking windows.
        This endpoint is used to retrieve any booking windows related to the service
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/bookingwindows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDBookingwindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_setup_v1_services_id_calendar(self, request: operations.GetSetupV1ServicesIDCalendarRequest) -> operations.GetSetupV1ServicesIDCalendarResponse:
        r"""Returns the linked calendar for the service
        Use this endpoint to get the linked calendar for the service.
        A service can only be linked to one calendar in a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/calendar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def get_setup_v1_services_id_resources(self, request: operations.GetSetupV1ServicesIDResourcesRequest) -> operations.GetSetupV1ServicesIDResourcesResponse:
        r"""Returns a list of resources for the specified service.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/resources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out

        return res

    
    def post_setup_v1_businessusers(self, request: operations.PostSetupV1BusinessusersRequest) -> operations.PostSetupV1BusinessusersResponse:
        r"""Creates a new businessUser object.
        Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
        Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required. 
        For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
        
        Business Roles:
        bizowner (Business Owner)
        bizadmin (Business Administrator)
        bizresource (Business User - Bookable Resource)
        bizclerk (Business User - Portal Booking Privileges)
        bizuser (Business User - Portal View Only Privileges)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    def post_setup_v1_calendars(self, request: operations.PostSetupV1CalendarsRequest) -> operations.PostSetupV1CalendarsResponse:
        r"""Creates a new calendar object.
        Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
        Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
        name is a required parameter<br /><br />
        type is a required parameter with a value of “resource”<br /><br />
        interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
        bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
        scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
        weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def post_setup_v1_calendars_id_block(self, request: operations.PostSetupV1CalendarsIDBlockRequest) -> operations.PostSetupV1CalendarsIDBlockResponse:
        r"""Create a new calendar block
        Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Calendar blocks can be set to specific time ranges or for the whole day. 
        
        Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily blocks will repeat for each day of the week for the date range specified.
        
        Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
        should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def post_setup_v1_companies(self, request: operations.PostSetupV1CompaniesRequest) -> operations.PostSetupV1CompaniesResponse:
        r"""Creates a company profile.
        Use this endpoint to create a new Company Profile. 
        This endpoint is restricted by scope and limited to use by OnSched internal apps
        
        The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
        or a Microsoft Timezone e.g. Eastern Standard Time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def post_setup_v1_companies_domains(self, request: operations.PostSetupV1CompaniesDomainsRequest) -> operations.PostSetupV1CompaniesDomainsResponse:
        r"""Creates a whitelisted domain for the authorized company
        Returns view of domain created
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def post_setup_v1_companies_email_templates_master(self, request: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest) -> operations.PostSetupV1CompaniesEmailTemplatesMasterResponse:
        r"""Updates / creates custom master email template settings
        Settings exist for showing or hiding panels
        and for changing color schemes
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def post_setup_v1_companies_regions(self, request: operations.PostSetupV1CompaniesRegionsRequest) -> operations.PostSetupV1CompaniesRegionsResponse:
        r"""Create a new region
        Creates a new region.
        
        Regions can be mapped to business locations. Locations can be filtered by region id
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def post_setup_v1_locations(self, request: operations.PostSetupV1LocationsRequest) -> operations.PostSetupV1LocationsResponse:
        r"""Creates a new location object.
        Use this endpoint to create a new business location.
        
        Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
        can define their own settings that override the company level settings.
        
        If you wish to update settings then pass in the settings element in the input.
        When you are working with the Primary location, then the settings will update the company level settings.
        Otherwise, the settings will update business location settings.
        
        If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def post_setup_v1_locations_bulk(self, request: operations.PostSetupV1LocationsBulkRequest) -> operations.PostSetupV1LocationsBulkResponse:
        r"""Creates new location objects.
        Use this endpoint to create new business locations. The incoming list of 
        locations cannot exceed 100 location objects for performance purposes.
        
        Each location object may consist of:
        Name: The Name of the location.
        AdminName: The Name of the location admin.
        AdminEmail: The email address of the location admin.
        TimezoneName: The IANA formatted name of the locations timezone.
        FriendlyId: A friendly id to use to refer to the location.
        Address: The physical address of the location.
        BusinessHours: The hours of operation of the location.
        Settings: Additional location options that can affect things like 
        the book ahead restrictions, customer bookings per day, etc.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/locations/bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocationViewModel]])
                res.location_view_models = out

        return res

    
    def post_setup_v1_locations_id_email_templates(self, request: operations.PostSetupV1LocationsIDEmailTemplatesRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesResponse:
        r"""Uploads a custom email template
        Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
        Updates to the primary business location create company scoped custom templates
        Updates to non primary business locations create business location scoped custom templates
        The master template cannot be updated with this endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    def post_setup_v1_locations_id_email_templates_master(self, request: operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse:
        r"""Saves settings for the master email template
        Use this endpoint to a customize the master email template settings. 
        Updates to the primary business location create company scoped master email template custom settings
        Updates to non primary business locations create business location scoped master email template custom settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    def post_setup_v1_locations_id_google_service_account(self, request: operations.PostSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.PostSetupV1LocationsIDGoogleServiceAccountResponse:
        r"""Authorize access to all google calendar users in an organization
        Use this endpoint to authorize access to all google calendar users.
        You must create a Google Service account as an admin of your GSuite,
        then save credentials as a Json Key file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    def post_setup_v1_locations_id_services(self, request: operations.PostSetupV1LocationsIDServicesRequest) -> operations.PostSetupV1LocationsIDServicesResponse:
        r"""Adds location services to the specified location
        Use this endpoint to explicitly define what company scoped services
        at this location are offered. GET locations allows serviceId as a 
        search parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def post_setup_v1_locations_id_uploadimage(self, request: operations.PostSetupV1LocationsIDUploadimageRequest) -> operations.PostSetupV1LocationsIDUploadimageResponse:
        r"""Uploads a location image
        Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def post_setup_v1_resourcegroups(self, request: operations.PostSetupV1ResourcegroupsRequest) -> operations.PostSetupV1ResourcegroupsResponse:
        r"""Creates a new resource group object.
        Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
        Email Address and a Name are required for creating a new resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def post_setup_v1_resources(self, request: operations.PostSetupV1ResourcesRequest) -> operations.PostSetupV1ResourcesResponse:
        r"""Creates a new resource object.
        Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br /> 
        Email Address and a Name are required for creating a new resource. <br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource, 
        while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def post_setup_v1_resources_bulk(self, request: operations.PostSetupV1ResourcesBulkRequest) -> operations.PostSetupV1ResourcesBulkResponse:
        r"""Creates new resource objects.
        Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
        Email Address and a Name are required for creating each new resource.<br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    def post_setup_v1_resources_id_allocations(self, request: operations.PostSetupV1ResourcesIDAllocationsRequest) -> operations.PostSetupV1ResourcesIDAllocationsResponse:
        r"""Create a new resource allocation
        Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
        A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
        
        Resource allocations can be set to specific time ranges or for the whole day. 
        
        Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily allocations will repeat for each day of the week for the date range specified.
        
        Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
        the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in 
        the EndDate field to indicate the repeating block should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def post_setup_v1_resources_id_block(self, request: operations.PostSetupV1ResourcesIDBlockRequest) -> operations.PostSetupV1ResourcesIDBlockResponse:
        r"""Create a new resource block
        Creates a new resource block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily blocks will repeat for each day of the week for the date range specified.
        
        Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in 
        the EndDate field to indicate the repeating block should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def post_setup_v1_resources_id_services(self, request: operations.PostSetupV1ResourcesIDServicesRequest) -> operations.PostSetupV1ResourcesIDServicesResponse:
        r"""Adds resource services to the specified resource
        Use this endpoint to add resource services
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def post_setup_v1_resources_id_uploadimage(self, request: operations.PostSetupV1ResourcesIDUploadimageRequest) -> operations.PostSetupV1ResourcesIDUploadimageResponse:
        r"""Uploads a resource image
        Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def post_setup_v1_services(self, request: operations.PostSetupV1ServicesRequest) -> operations.PostSetupV1ServicesResponse:
        r"""Creates a new service object.
        Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
        The service Type defaults to 1 if not entered.
        The service Type can be one of the following values:
        1 = Appointment
        2 = Event
        3 = Meeting
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def post_setup_v1_services_bookingwindows(self, request: operations.PostSetupV1ServicesBookingwindowsRequest) -> operations.PostSetupV1ServicesBookingwindowsResponse:
        r"""Creates a new bookingWindow object.
        Use this endpoint to create a new bookingWindow.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services/bookingwindows"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesBookingwindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def post_setup_v1_services_calendar(self, request: operations.PostSetupV1ServicesCalendarRequest) -> operations.PostSetupV1ServicesCalendarResponse:
        r"""Links the service to a calendar
        Use this endpoint to link a service to a calendar.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/services/calendar"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesCalendarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    def post_setup_v1_services_id_allocations(self, request: operations.PostSetupV1ServicesIDAllocationsRequest) -> operations.PostSetupV1ServicesIDAllocationsResponse:
        r"""Create a new service allocation
        Creates a new service allocation. You must specify a StartDate and EndDate.
        A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
        
        Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
        
        Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily allocations will repeat for each day of the week for the date range specified.
        
        Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
        should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def post_setup_v1_services_id_allocations_bulk(self, request: operations.PostSetupV1ServicesIDAllocationsBulkRequest) -> operations.PostSetupV1ServicesIDAllocationsBulkResponse:
        r"""Create new service allocations in bulk
        Creates new service allocations in bulk. Refer to documentation
        for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
        for understanding how to populate the properties
        
        Use this endpoint only if you need to POST multiple allocations in one call
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations/bulk", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ServiceAllocationViewModel]])
                res.service_allocation_view_models = out

        return res

    
    def post_setup_v1_services_id_block(self, request: operations.PostSetupV1ServicesIDBlockRequest) -> operations.PostSetupV1ServicesIDBlockResponse:
        r"""Create a new service block
        Creates a new service block. You must specify a StartDateTime and EndDateTime.
        A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
        
        Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
        
        Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
        The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively. 
        
        Daily blocks will repeat for each day of the week for the date range specified.
        
        Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
        you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
        of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
        For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
        
        Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
        the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
        repeat every 10 days. The interval property applies to all repeat frequencies.
        
        Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
        the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
        
        Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in 
        the EndDate field to indicate the repeating block should continue indefinitely.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/block", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    def post_setup_v1_services_id_uploadimage(self, request: operations.PostSetupV1ServicesIDUploadimageRequest) -> operations.PostSetupV1ServicesIDUploadimageResponse:
        r"""Uploads a service image
        Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
        and pass that string as input along with your filename.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/uploadimage", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def put_setup_v1_appointments_id_reassign_resource_resource_id_(self, request: operations.PutSetupV1AppointmentsIDReassignResourceResourceIDRequest) -> operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
        r"""Reassigns the appointment to the supplied resourceId
        The result returned is a single appointment object. A valid id is required to find the appointment. 
        
        Find appointment id's using the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}/reassign/resource/{resourceId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_setup_v1_businessusers_id_(self, request: operations.PutSetupV1BusinessusersIDRequest) -> operations.PutSetupV1BusinessusersIDResponse:
        r"""Updates a businessUser object.
        Use this endpoint to update a businessUser.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    def put_setup_v1_calendars_block_id_(self, request: operations.PutSetupV1CalendarsBlockIDRequest) -> operations.PutSetupV1CalendarsBlockIDResponse:
        r"""Update a calendar block
        Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    def put_setup_v1_calendars_id_(self, request: operations.PutSetupV1CalendarsIDRequest) -> operations.PutSetupV1CalendarsIDResponse:
        r"""Updates a calendar object.
        Use this endpoint to update a calendar. 
        Calendar availability is optional. If this element is not populated then weekly availability is not updated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def put_setup_v1_calendars_id_recover(self, request: operations.PutSetupV1CalendarsIDRecoverRequest) -> operations.PutSetupV1CalendarsIDRecoverResponse:
        r"""Recovers a calendar object.
        Use this endpoint to recover a deleted calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    def put_setup_v1_companies(self, request: operations.PutSetupV1CompaniesRequest) -> operations.PutSetupV1CompaniesResponse:
        r"""Updates a company object.
        Use this endpoint to update the authorized company. 
        
        Your client credentials resolve to a single company.
        
        The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
        or a Microsoft Timezone e.g. Eastern Standard Time
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    def put_setup_v1_companies_domains_id_(self, request: operations.PutSetupV1CompaniesDomainsIDRequest) -> operations.PutSetupV1CompaniesDomainsIDResponse:
        r"""Updates a whitelisted domain for the authorized company
        Returns view of domain updated
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    def put_setup_v1_companies_regions_id_(self, request: operations.PutSetupV1CompaniesRegionsIDRequest) -> operations.PutSetupV1CompaniesRegionsIDResponse:
        r"""Update a region
        Updates a region.
        
        Regions can be mapped to business locations. Locations can be filtered by region id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    def put_setup_v1_locations_id_(self, request: operations.PutSetupV1LocationsIDRequest) -> operations.PutSetupV1LocationsIDResponse:
        r"""Use this endpoint to change the scope of online booking settings
        Use this endpoint to update a business location. 
        
        The optional removeRegion query parameter is used to remove the region relationship from the location
        
        If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
        
        If all your settings are uniform across all locations then do not pass settings and the location will use the settings
        defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
        that needs different settings by providing settings in the update model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_holidays_holiday_id_closed_(self, request: operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest) -> operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
        r"""Sets a business holiday to open or closed.
        Use this endpoint to set business holidays to open or closed. 
        
        If you pass in an asterisk for the holidayId then all business holidays
        will be set to the valaue
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_recover(self, request: operations.PutSetupV1LocationsIDRecoverRequest) -> operations.PutSetupV1LocationsIDRecoverResponse:
        r"""Recovers a location object.
        Use this endpoint to recover a deleted business location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_locations_id_settings_scope_settings_scope_(self, request: operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest) -> operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse:
        r"""Changes the scope of OnlineBooking Settings.
        Use this endpoint to update a business location. 
        
        settingsScope values are 0 = company scope, 1 = business location scope
        if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
        Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
        ///
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def put_setup_v1_resourcegroups_id_(self, request: operations.PutSetupV1ResourcegroupsIDRequest) -> operations.PutSetupV1ResourcegroupsIDResponse:
        r"""Updates a resource group object.
        Use this endpoint to update a resource group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    def put_setup_v1_resourcegroups_id_recover(self, request: operations.PutSetupV1ResourcegroupsIDRecoverRequest) -> operations.PutSetupV1ResourcegroupsIDRecoverResponse:
        r"""Recovers a resource group object.
        Use this endpoint to recover a deleted resource group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def put_setup_v1_resources_allocations_id_(self, request: operations.PutSetupV1ResourcesAllocationsIDRequest) -> operations.PutSetupV1ResourcesAllocationsIDResponse:
        r"""Update a resource allocation
        Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def put_setup_v1_resources_block_id_(self, request: operations.PutSetupV1ResourcesBlockIDRequest) -> operations.PutSetupV1ResourcesBlockIDResponse:
        r"""Update a resource block
        Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    def put_setup_v1_resources_bulk(self, request: operations.PutSetupV1ResourcesBulkRequest) -> operations.PutSetupV1ResourcesBulkResponse:
        r"""Updates resource objects.
        Use this endpoint to update multiple resources.<br /><br /> 
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource, 
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    def put_setup_v1_resources_id_(self, request: operations.PutSetupV1ResourcesIDRequest) -> operations.PutSetupV1ResourcesIDResponse:
        r"""Updates a resource object.
        Use this endpoint to update a resource. <br /><br />
        Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
        while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def put_setup_v1_resources_id_availability(self, request: operations.PutSetupV1ResourcesIDAvailabilityRequest) -> operations.PutSetupV1ResourcesIDAvailabilityResponse:
        r"""Updates Weekly Availability
        Use this endpoint to update resource availability. The Id parameter specifies the resource
        for which you are updating availability. Availability day entries do not need to be created. 
        The availbility day entries are created when a resource object is created. They default to
        the business hours.
        
        Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
        Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
        
        OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
        
        To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
        to be unavailable, use the resource blocks endpoints. 
        
        Times entered represent the
        timezone of the resource. Resources can belong to any world timezone.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    def put_setup_v1_resources_id_reassign_appointments_resource_id_(self, request: operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest) -> operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse:
        r"""Reassigns appointments to another resource
        Use this endpoint to reassign appointments from one resource to another.
        If the startDate is not supplied, the default is today's date + 1 day;
        If the endDate is not supplied, all future appointments from the start date will be reassigned
        If the calendarId is not supplied the default is the primary calendar of the location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AppointmentViewModel]])
                res.appointment_view_models = out

        return res

    
    def put_setup_v1_resources_id_recover(self, request: operations.PutSetupV1ResourcesIDRecoverRequest) -> operations.PutSetupV1ResourcesIDRecoverResponse:
        r"""Recovers a resource object.
        Use this endpoint to recover a deleted resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/recover", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def put_setup_v1_services_allocations_id_(self, request: operations.PutSetupV1ServicesAllocationsIDRequest) -> operations.PutSetupV1ServicesAllocationsIDResponse:
        r"""Update a service allocation
        Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def put_setup_v1_services_block_id_(self, request: operations.PutSetupV1ServicesBlockIDRequest) -> operations.PutSetupV1ServicesBlockIDResponse:
        r"""Update a service block
        Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    def put_setup_v1_services_bookingwindows_id_(self, request: operations.PutSetupV1ServicesBookingwindowsIDRequest) -> operations.PutSetupV1ServicesBookingwindowsIDResponse:
        r"""Updates a bookingWindow object.
        Use this endpoint to update a booking window
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    def put_setup_v1_services_id_(self, request: operations.PutSetupV1ServicesIDRequest) -> operations.PutSetupV1ServicesIDResponse:
        r"""Updates a service object.
        Use this endpoint to update a service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def put_setup_v1_services_id_availability(self, request: operations.PutSetupV1ServicesIDAvailabilityRequest) -> operations.PutSetupV1ServicesIDAvailabilityResponse:
        r"""Updates Weekly Availability
        Use this endpoint to update service availability. The Id parameter specifies the service
        for which you are updating availability. Availability day entries do not need to be created. 
        The availbility day entries are created when a service object is created. They default to
        the business hours.
        
        Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
        Start and End Times are entered in miltary format. e.g 2230 is 10:30pm. 
        
        OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
        
        To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
        to be unavailable, use the resource blocks endpoints. 
        
        Times entered represent the timezone of the business location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    def put_setup_v1_services_id_recover(self, request: operations.PutSetupV1ServicesIDRecoverRequest) -> operations.PutSetupV1ServicesIDRecoverResponse:
        r"""Recovers a service object.
        Use this endpoint to recover a deleted service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/recover", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    