import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://onsched.com",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def delete_setup_v1_businessusers_id_(self, request: operations.DeleteSetupV1BusinessusersIDRequest) -> operations.DeleteSetupV1BusinessusersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_setup_v1_calendars_block_id_(self, request: operations.DeleteSetupV1CalendarsBlockIDRequest) -> operations.DeleteSetupV1CalendarsBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    
    def delete_setup_v1_calendars_id_(self, request: operations.DeleteSetupV1CalendarsIDRequest) -> operations.DeleteSetupV1CalendarsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    
    def delete_setup_v1_companies_domains_id_(self, request: operations.DeleteSetupV1CompaniesDomainsIDRequest) -> operations.DeleteSetupV1CompaniesDomainsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    
    def delete_setup_v1_companies_email_templates_master(self) -> operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def delete_setup_v1_companies_regions_id_(self, request: operations.DeleteSetupV1CompaniesRegionsIDRequest) -> operations.DeleteSetupV1CompaniesRegionsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    
    def delete_setup_v1_locations_id_(self, request: operations.DeleteSetupV1LocationsIDRequest) -> operations.DeleteSetupV1LocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def delete_setup_v1_locations_id_deleteallimages(self, request: operations.DeleteSetupV1LocationsIDDeleteallimagesRequest) -> operations.DeleteSetupV1LocationsIDDeleteallimagesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteallimages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteallimagesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.delete_setup_v1_locations_id_deleteallimages_200_application_json_boolean = out

        return res

    
    
    def delete_setup_v1_locations_id_deleteimage(self, request: operations.DeleteSetupV1LocationsIDDeleteimageRequest) -> operations.DeleteSetupV1LocationsIDDeleteimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/deleteimage", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def delete_setup_v1_locations_id_email_templates_master(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def delete_setup_v1_locations_id_email_templates_template_name_(self, request: operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    
    def delete_setup_v1_locations_id_google_service_account(self, request: operations.DeleteSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_setup_v1_locations_id_services(self, request: operations.DeleteSetupV1LocationsIDServicesRequest) -> operations.DeleteSetupV1LocationsIDServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def delete_setup_v1_locations_services_id_(self, request: operations.DeleteSetupV1LocationsServicesIDRequest) -> operations.DeleteSetupV1LocationsServicesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1LocationsServicesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def delete_setup_v1_resourcegroups_id_(self, request: operations.DeleteSetupV1ResourcegroupsIDRequest) -> operations.DeleteSetupV1ResourcegroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    
    def delete_setup_v1_resources_allocations_id_(self, request: operations.DeleteSetupV1ResourcesAllocationsIDRequest) -> operations.DeleteSetupV1ResourcesAllocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def delete_setup_v1_resources_block_id_(self, request: operations.DeleteSetupV1ResourcesBlockIDRequest) -> operations.DeleteSetupV1ResourcesBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def delete_setup_v1_resources_id_(self, request: operations.DeleteSetupV1ResourcesIDRequest) -> operations.DeleteSetupV1ResourcesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def delete_setup_v1_resources_id_deleteimage(self, request: operations.DeleteSetupV1ResourcesIDDeleteimageRequest) -> operations.DeleteSetupV1ResourcesIDDeleteimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/deleteimage", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def delete_setup_v1_resources_id_services(self, request: operations.DeleteSetupV1ResourcesIDServicesRequest) -> operations.DeleteSetupV1ResourcesIDServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def delete_setup_v1_services_allocations_id_(self, request: operations.DeleteSetupV1ServicesAllocationsIDRequest) -> operations.DeleteSetupV1ServicesAllocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    
    def delete_setup_v1_services_block_id_(self, request: operations.DeleteSetupV1ServicesBlockIDRequest) -> operations.DeleteSetupV1ServicesBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def delete_setup_v1_services_bookingwindows_id_(self, request: operations.DeleteSetupV1ServicesBookingwindowsIDRequest) -> operations.DeleteSetupV1ServicesBookingwindowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def delete_setup_v1_services_calendar_id_(self, request: operations.DeleteSetupV1ServicesCalendarIDRequest) -> operations.DeleteSetupV1ServicesCalendarIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/calendar/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesCalendarIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    
    def delete_setup_v1_services_id_(self, request: operations.DeleteSetupV1ServicesIDRequest) -> operations.DeleteSetupV1ServicesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def delete_setup_v1_services_id_deleteimage(self, request: operations.DeleteSetupV1ServicesIDDeleteimageRequest) -> operations.DeleteSetupV1ServicesIDDeleteimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/deleteimage", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSetupV1ServicesIDDeleteimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def get_plan_id_(self, request: operations.GetPlanIDRequest) -> operations.GetPlanIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{planId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlanIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_setup_v1_appointments(self, request: operations.GetSetupV1AppointmentsRequest) -> operations.GetSetupV1AppointmentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/appointments"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.appointment_list_view_model = out

        return res

    
    
    def get_setup_v1_appointments_id_(self, request: operations.GetSetupV1AppointmentsIDRequest) -> operations.GetSetupV1AppointmentsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    
    def get_setup_v1_businessusers(self, request: operations.GetSetupV1BusinessusersRequest) -> operations.GetSetupV1BusinessusersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_user_list_view_model = out

        return res

    
    
    def get_setup_v1_businessusers_email_companies(self, request: operations.GetSetupV1BusinessusersEmailCompaniesRequest) -> operations.GetSetupV1BusinessusersEmailCompaniesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{email}/companies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersEmailCompaniesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedCompanyListViewModel])
                res.authorized_company_list_view_model = out

        return res

    
    
    def get_setup_v1_businessusers_id_(self, request: operations.GetSetupV1BusinessusersIDRequest) -> operations.GetSetupV1BusinessusersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    
    def get_setup_v1_businessusers_permissions(self, request: operations.GetSetupV1BusinessusersPermissionsRequest) -> operations.GetSetupV1BusinessusersPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/businessusers/permissions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1BusinessusersPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.business_permission_list_view_model = out

        return res

    
    
    def get_setup_v1_calendars(self, request: operations.GetSetupV1CalendarsRequest) -> operations.GetSetupV1CalendarsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.schedule_list_view_model = out

        return res

    
    
    def get_setup_v1_calendars_blocks_id_(self, request: operations.GetSetupV1CalendarsBlocksIDRequest) -> operations.GetSetupV1CalendarsBlocksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/blocks/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    
    def get_setup_v1_calendars_id_(self, request: operations.GetSetupV1CalendarsIDRequest) -> operations.GetSetupV1CalendarsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    
    def get_setup_v1_calendars_id_blocks(self, request: operations.GetSetupV1CalendarsIDBlocksRequest) -> operations.GetSetupV1CalendarsIDBlocksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CalendarsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    
    def get_setup_v1_companies(self) -> operations.GetSetupV1CompaniesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    
    def get_setup_v1_companies_domains(self) -> operations.GetSetupV1CompaniesDomainsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainListViewModel])
                res.company_domain_list_view_model = out

        return res

    
    
    def get_setup_v1_companies_domains_id_(self, request: operations.GetSetupV1CompaniesDomainsIDRequest) -> operations.GetSetupV1CompaniesDomainsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    
    def get_setup_v1_companies_email_templates(self) -> operations.GetSetupV1CompaniesEmailTemplatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    
    def get_setup_v1_companies_email_templates_master(self) -> operations.GetSetupV1CompaniesEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def get_setup_v1_companies_email_templates_template_name_(self, request: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/email/templates/{templateName}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    
    def get_setup_v1_companies_regions(self, request: operations.GetSetupV1CompaniesRegionsRequest) -> operations.GetSetupV1CompaniesRegionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    
    def get_setup_v1_companies_timezones_date_(self, request: operations.GetSetupV1CompaniesTimezonesDateRequest) -> operations.GetSetupV1CompaniesTimezonesDateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/timezones/{date}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CompaniesTimezonesDateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TimezoneViewModel])
                res.timezone_view_model = out

        return res

    
    
    def get_setup_v1_customers(self, request: operations.GetSetupV1CustomersRequest) -> operations.GetSetupV1CustomersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_list_view_model = out

        return res

    
    
    def get_setup_v1_customers_id_(self, request: operations.GetSetupV1CustomersIDRequest) -> operations.GetSetupV1CustomersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    
    def get_setup_v1_customers_id_privacy(self, request: operations.GetSetupV1CustomersIDPrivacyRequest) -> operations.GetSetupV1CustomersIDPrivacyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/customers/{id}/privacy", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1CustomersIDPrivacyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_privacy_view_model = out

        return res

    
    
    def get_setup_v1_locations(self, request: operations.GetSetupV1LocationsRequest) -> operations.GetSetupV1LocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.location_list_view_model = out

        return res

    
    
    def get_setup_v1_locations_id_(self, request: operations.GetSetupV1LocationsIDRequest) -> operations.GetSetupV1LocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def get_setup_v1_locations_id_email_templates(self, request: operations.GetSetupV1LocationsIDEmailTemplatesRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.email_template_list_view_model = out

        return res

    
    
    def get_setup_v1_locations_id_email_templates_master(self, request: operations.GetSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def get_setup_v1_locations_id_email_templates_template_name_(self, request: operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameRequest) -> operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/{templateName}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDEmailTemplatesTemplateNameResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    
    def get_setup_v1_locations_id_google_service_account(self, request: operations.GetSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.GetSetupV1LocationsIDGoogleServiceAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    
    def get_setup_v1_locations_id_services(self, request: operations.GetSetupV1LocationsIDServicesRequest) -> operations.GetSetupV1LocationsIDServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/services/{id}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_group_list_view_model = out

        return res

    
    
    def get_setup_v1_resourcegroups_id_(self, request: operations.GetSetupV1ResourcegroupsIDRequest) -> operations.GetSetupV1ResourcegroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    
    def get_setup_v1_resources(self, request: operations.GetSetupV1ResourcesRequest) -> operations.GetSetupV1ResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAllocationViewModel])
                res.resource_allocation_view_model = out

        return res

    
    
    def get_setup_v1_resources_blocks_id_(self, request: operations.GetSetupV1ResourcesBlocksIDRequest) -> operations.GetSetupV1ResourcesBlocksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/blocks/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def get_setup_v1_resources_id_(self, request: operations.GetSetupV1ResourcesIDRequest) -> operations.GetSetupV1ResourcesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def get_setup_v1_resources_id_allocations(self, request: operations.GetSetupV1ResourcesIDAllocationsRequest) -> operations.GetSetupV1ResourcesIDAllocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    
    def get_setup_v1_resources_id_blocks(self, request: operations.GetSetupV1ResourcesIDBlocksRequest) -> operations.GetSetupV1ResourcesIDBlocksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthGoogleGoogleEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    
    def get_setup_v1_resources_id_calendar_auth_outlook_outlook_email_address_(self, request: operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressRequest) -> operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesIDCalendarAuthOutlookOutlookEmailAddressResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarAuthViewModel])
                res.calendar_auth_view_model = out

        return res

    
    
    def get_setup_v1_resources_timezones(self) -> operations.GetSetupV1ResourcesTimezonesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resources/timezones"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ResourcesTimezonesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SystemTimezoneViewModel])
                res.system_timezone_view_model = out

        return res

    
    
    def get_setup_v1_services(self, request: operations.GetSetupV1ServicesRequest) -> operations.GetSetupV1ServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    
    def get_setup_v1_services_allocations_id_(self, request: operations.GetSetupV1ServicesAllocationsIDRequest) -> operations.GetSetupV1ServicesAllocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    
    def get_setup_v1_services_blocks_id_(self, request: operations.GetSetupV1ServicesBlocksIDRequest) -> operations.GetSetupV1ServicesBlocksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/blocks/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBlocksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def get_setup_v1_services_bookingwindows_id_(self, request: operations.GetSetupV1ServicesBookingwindowsIDRequest) -> operations.GetSetupV1ServicesBookingwindowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    
    def get_setup_v1_services_id_(self, request: operations.GetSetupV1ServicesIDRequest) -> operations.GetSetupV1ServicesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def get_setup_v1_services_id_allocations(self, request: operations.GetSetupV1ServicesIDAllocationsRequest) -> operations.GetSetupV1ServicesIDAllocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    
    def get_setup_v1_services_id_blocks(self, request: operations.GetSetupV1ServicesIDBlocksRequest) -> operations.GetSetupV1ServicesIDBlocksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/blocks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/bookingwindows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/calendar", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDCalendarResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    
    def get_setup_v1_services_id_resources(self, request: operations.GetSetupV1ServicesIDResourcesRequest) -> operations.GetSetupV1ServicesIDResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/resources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSetupV1ServicesIDResourcesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out

        return res

    
    
    def post_setup_v1_businessusers(self, request: operations.PostSetupV1BusinessusersRequest) -> operations.PostSetupV1BusinessusersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/businessusers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1BusinessusersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    
    def post_setup_v1_calendars(self, request: operations.PostSetupV1CalendarsRequest) -> operations.PostSetupV1CalendarsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/calendars"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    
    def post_setup_v1_calendars_id_block(self, request: operations.PostSetupV1CalendarsIDBlockRequest) -> operations.PostSetupV1CalendarsIDBlockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/block", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CalendarsIDBlockResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def post_setup_v1_companies(self, request: operations.PostSetupV1CompaniesRequest) -> operations.PostSetupV1CompaniesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    
    def post_setup_v1_companies_domains(self, request: operations.PostSetupV1CompaniesDomainsRequest) -> operations.PostSetupV1CompaniesDomainsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/domains"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesDomainsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    
    def post_setup_v1_companies_email_templates_master(self, request: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest) -> operations.PostSetupV1CompaniesEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/email/templates/master"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def post_setup_v1_companies_regions(self, request: operations.PostSetupV1CompaniesRegionsRequest) -> operations.PostSetupV1CompaniesRegionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies/regions"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1CompaniesRegionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    
    def post_setup_v1_locations(self, request: operations.PostSetupV1LocationsRequest) -> operations.PostSetupV1LocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/locations"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def post_setup_v1_locations_bulk(self, request: operations.PostSetupV1LocationsBulkRequest) -> operations.PostSetupV1LocationsBulkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/locations/bulk"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.LocationViewModel]])
                res.location_view_models = out

        return res

    
    
    def post_setup_v1_locations_id_email_templates(self, request: operations.PostSetupV1LocationsIDEmailTemplatesRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContentResult])
                res.content_result = out

        return res

    
    
    def post_setup_v1_locations_id_email_templates_master(self, request: operations.PostSetupV1LocationsIDEmailTemplatesMasterRequest) -> operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/email/templates/master", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDEmailTemplatesMasterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MasterEmailTemplateSettingsViewModel])
                res.master_email_template_settings_view_model = out

        return res

    
    
    def post_setup_v1_locations_id_google_service_account(self, request: operations.PostSetupV1LocationsIDGoogleServiceAccountRequest) -> operations.PostSetupV1LocationsIDGoogleServiceAccountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/google/service/account", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDGoogleServiceAccountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleServiceAccountCreds])
                res.google_service_account_creds = out

        return res

    
    
    def post_setup_v1_locations_id_services(self, request: operations.PostSetupV1LocationsIDServicesRequest) -> operations.PostSetupV1LocationsIDServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/services", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def post_setup_v1_locations_id_uploadimage(self, request: operations.PostSetupV1LocationsIDUploadimageRequest) -> operations.PostSetupV1LocationsIDUploadimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/uploadimage", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1LocationsIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def post_setup_v1_resourcegroups(self, request: operations.PostSetupV1ResourcegroupsRequest) -> operations.PostSetupV1ResourcegroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resourcegroups"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcegroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    
    def post_setup_v1_resources(self, request: operations.PostSetupV1ResourcesRequest) -> operations.PostSetupV1ResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resources"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def post_setup_v1_resources_bulk(self, request: operations.PostSetupV1ResourcesBulkRequest) -> operations.PostSetupV1ResourcesBulkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    
    def post_setup_v1_resources_id_allocations(self, request: operations.PostSetupV1ResourcesIDAllocationsRequest) -> operations.PostSetupV1ResourcesIDAllocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/allocations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def post_setup_v1_resources_id_block(self, request: operations.PostSetupV1ResourcesIDBlockRequest) -> operations.PostSetupV1ResourcesIDBlockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/block", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def post_setup_v1_resources_id_services(self, request: operations.PostSetupV1ResourcesIDServicesRequest) -> operations.PostSetupV1ResourcesIDServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/services", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def post_setup_v1_resources_id_uploadimage(self, request: operations.PostSetupV1ResourcesIDUploadimageRequest) -> operations.PostSetupV1ResourcesIDUploadimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/uploadimage", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ResourcesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def post_setup_v1_services(self, request: operations.PostSetupV1ServicesRequest) -> operations.PostSetupV1ServicesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/services"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def post_setup_v1_services_bookingwindows(self, request: operations.PostSetupV1ServicesBookingwindowsRequest) -> operations.PostSetupV1ServicesBookingwindowsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/services/bookingwindows"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesBookingwindowsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    
    def post_setup_v1_services_calendar(self, request: operations.PostSetupV1ServicesCalendarRequest) -> operations.PostSetupV1ServicesCalendarResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/services/calendar"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesCalendarResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceCalendarViewModel])
                res.service_calendar_view_model = out

        return res

    
    
    def post_setup_v1_services_id_allocations(self, request: operations.PostSetupV1ServicesIDAllocationsRequest) -> operations.PostSetupV1ServicesIDAllocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    
    def post_setup_v1_services_id_allocations_bulk(self, request: operations.PostSetupV1ServicesIDAllocationsBulkRequest) -> operations.PostSetupV1ServicesIDAllocationsBulkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/allocations/bulk", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDAllocationsBulkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ServiceAllocationViewModel]])
                res.service_allocation_view_models = out

        return res

    
    
    def post_setup_v1_services_id_block(self, request: operations.PostSetupV1ServicesIDBlockRequest) -> operations.PostSetupV1ServicesIDBlockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/block", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDBlockResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    
    def post_setup_v1_services_id_uploadimage(self, request: operations.PostSetupV1ServicesIDUploadimageRequest) -> operations.PostSetupV1ServicesIDUploadimageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/uploadimage", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSetupV1ServicesIDUploadimageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def put_setup_v1_appointments_id_reassign_resource_resource_id_(self, request: operations.PutSetupV1AppointmentsIDReassignResourceResourceIDRequest) -> operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/appointments/{id}/reassign/resource/{resourceId}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1AppointmentsIDReassignResourceResourceIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    
    def put_setup_v1_businessusers_id_(self, request: operations.PutSetupV1BusinessusersIDRequest) -> operations.PutSetupV1BusinessusersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/businessusers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1BusinessusersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessUserViewModel])
                res.business_user_view_model = out

        return res

    
    
    def put_setup_v1_calendars_block_id_(self, request: operations.PutSetupV1CalendarsBlockIDRequest) -> operations.PutSetupV1CalendarsBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/block/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarBlockViewModel])
                res.calendar_block_view_model = out

        return res

    
    
    def put_setup_v1_calendars_id_(self, request: operations.PutSetupV1CalendarsIDRequest) -> operations.PutSetupV1CalendarsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    
    def put_setup_v1_calendars_id_recover(self, request: operations.PutSetupV1CalendarsIDRecoverRequest) -> operations.PutSetupV1CalendarsIDRecoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/calendars/{id}/recover", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CalendarsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScheduleViewModel])
                res.schedule_view_model = out

        return res

    
    
    def put_setup_v1_companies(self, request: operations.PutSetupV1CompaniesRequest) -> operations.PutSetupV1CompaniesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/companies"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyViewModel])
                res.company_view_model = out

        return res

    
    
    def put_setup_v1_companies_domains_id_(self, request: operations.PutSetupV1CompaniesDomainsIDRequest) -> operations.PutSetupV1CompaniesDomainsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/domains/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesDomainsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompanyDomainViewModel])
                res.company_domain_view_model = out

        return res

    
    
    def put_setup_v1_companies_regions_id_(self, request: operations.PutSetupV1CompaniesRegionsIDRequest) -> operations.PutSetupV1CompaniesRegionsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/companies/regions/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1CompaniesRegionsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionViewModel])
                res.region_view_model = out

        return res

    
    
    def put_setup_v1_locations_id_(self, request: operations.PutSetupV1LocationsIDRequest) -> operations.PutSetupV1LocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def put_setup_v1_locations_id_holidays_holiday_id_closed_(self, request: operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedRequest) -> operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDHolidaysHolidayIDClosedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def put_setup_v1_locations_id_recover(self, request: operations.PutSetupV1LocationsIDRecoverRequest) -> operations.PutSetupV1LocationsIDRecoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/recover", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def put_setup_v1_locations_id_settings_scope_settings_scope_(self, request: operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeRequest) -> operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1LocationsIDSettingsScopeSettingsScopeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    
    def put_setup_v1_resourcegroups_id_(self, request: operations.PutSetupV1ResourcegroupsIDRequest) -> operations.PutSetupV1ResourcegroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceGroupViewModel])
                res.resource_group_view_model = out

        return res

    
    
    def put_setup_v1_resourcegroups_id_recover(self, request: operations.PutSetupV1ResourcegroupsIDRecoverRequest) -> operations.PutSetupV1ResourcegroupsIDRecoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resourcegroups/{id}/recover", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcegroupsIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def put_setup_v1_resources_allocations_id_(self, request: operations.PutSetupV1ResourcesAllocationsIDRequest) -> operations.PutSetupV1ResourcesAllocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/allocations/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def put_setup_v1_resources_block_id_(self, request: operations.PutSetupV1ResourcesBlockIDRequest) -> operations.PutSetupV1ResourcesBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/block/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceBlockViewModel])
                res.resource_block_view_model = out

        return res

    
    
    def put_setup_v1_resources_bulk(self, request: operations.PutSetupV1ResourcesBulkRequest) -> operations.PutSetupV1ResourcesBulkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/setup/v1/resources/bulk"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesBulkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ResourceViewModel]])
                res.resource_view_models = out

        return res

    
    
    def put_setup_v1_resources_id_(self, request: operations.PutSetupV1ResourcesIDRequest) -> operations.PutSetupV1ResourcesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def put_setup_v1_resources_id_availability(self, request: operations.PutSetupV1ResourcesIDAvailabilityRequest) -> operations.PutSetupV1ResourcesIDAvailabilityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/availability", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceAvailabilityViewModel])
                res.resource_availability_view_model = out

        return res

    
    
    def put_setup_v1_resources_id_reassign_appointments_resource_id_(self, request: operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDRequest) -> operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/reassign/appointments/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDReassignAppointmentsResourceIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AppointmentViewModel]])
                res.appointment_view_models = out

        return res

    
    
    def put_setup_v1_resources_id_recover(self, request: operations.PutSetupV1ResourcesIDRecoverRequest) -> operations.PutSetupV1ResourcesIDRecoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/resources/{id}/recover", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ResourcesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    
    def put_setup_v1_services_allocations_id_(self, request: operations.PutSetupV1ServicesAllocationsIDRequest) -> operations.PutSetupV1ServicesAllocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/allocations/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    
    def put_setup_v1_services_block_id_(self, request: operations.PutSetupV1ServicesBlockIDRequest) -> operations.PutSetupV1ServicesBlockIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/block/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBlockIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceBlockViewModel])
                res.service_block_view_model = out

        return res

    
    
    def put_setup_v1_services_bookingwindows_id_(self, request: operations.PutSetupV1ServicesBookingwindowsIDRequest) -> operations.PutSetupV1ServicesBookingwindowsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/bookingwindows/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesBookingwindowsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingWindowViewModel])
                res.booking_window_view_model = out

        return res

    
    
    def put_setup_v1_services_id_(self, request: operations.PutSetupV1ServicesIDRequest) -> operations.PutSetupV1ServicesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    
    def put_setup_v1_services_id_availability(self, request: operations.PutSetupV1ServicesIDAvailabilityRequest) -> operations.PutSetupV1ServicesIDAvailabilityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/availability", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDAvailabilityResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAvailabilityViewModel])
                res.service_availability_view_model = out

        return res

    
    
    def put_setup_v1_services_id_recover(self, request: operations.PutSetupV1ServicesIDRecoverRequest) -> operations.PutSetupV1ServicesIDRecoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/setup/v1/services/{id}/recover", request.path_params)
        
        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSetupV1ServicesIDRecoverResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    