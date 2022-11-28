import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://onsched.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteSetupV1BusinessusersId - Permanently deletes businessUser object.
     *
     * Use this endpoint to permanently delete a businessUser.
    **/
    deleteSetupV1BusinessusersId(req: operations.DeleteSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1BusinessusersIdResponse>;
    /**
     * deleteSetupV1CalendarsBlockId - Delete a calendar block object
     *
     * Deletes a calendar block.
    **/
    deleteSetupV1CalendarsBlockId(req: operations.DeleteSetupV1CalendarsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CalendarsBlockIdResponse>;
    /**
     * deleteSetupV1CalendarsId - Deletes a calendar object.
     *
     * Use this endpoint to delete a calendar. The calendar is not permanently deleted and can be recovered.
    **/
    deleteSetupV1CalendarsId(req: operations.DeleteSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CalendarsIdResponse>;
    /**
     * deleteSetupV1CompaniesDomainsId - Deletes a whitelisted domain for the authorized company
     * Returns view of domain deleted
    **/
    deleteSetupV1CompaniesDomainsId(req: operations.DeleteSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesDomainsIdResponse>;
    /**
     * deleteSetupV1CompaniesEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    deleteSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * deleteSetupV1CompaniesRegionsId - Delete a region
     *
     * Deletes a region.
     *
     * If the region is related to any business locations it cannot be deleted
    **/
    deleteSetupV1CompaniesRegionsId(req: operations.DeleteSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1CompaniesRegionsIdResponse>;
    /**
     * deleteSetupV1LocationsId - Deletes a location object.
     *
     * Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
    **/
    deleteSetupV1LocationsId(req: operations.DeleteSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdResponse>;
    /**
     * deleteSetupV1LocationsIdDeleteallimages - Deletes all images from location blob storage container
     *
     * An option exists to use upper case for matching the subdirectory name
     * Legacy apps stored pics using upper case externalId. Api uses lower case names.
    **/
    deleteSetupV1LocationsIdDeleteallimages(req: operations.DeleteSetupV1LocationsIdDeleteallimagesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteallimagesResponse>;
    /**
     * deleteSetupV1LocationsIdDeleteimage - Removes a location image
     *
     * Use this endpoint to delete a previously uploaded location image.
    **/
    deleteSetupV1LocationsIdDeleteimage(req: operations.DeleteSetupV1LocationsIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdDeleteimageResponse>;
    /**
     * deleteSetupV1LocationsIdEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    deleteSetupV1LocationsIdEmailTemplatesMaster(req: operations.DeleteSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * deleteSetupV1LocationsIdEmailTemplatesTemplateName - Deletes a custom email template
     *
     * Use this endpoint to remove a custom email template.
     *
     * Custom email templates created in the primary location are company scope and inherited by all locations
     * unless overriden in a location. Templates created in any location other than the primary apply to that location only.
    **/
    deleteSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * deleteSetupV1LocationsIdGoogleServiceAccount - Remove authorized access to all google calendar users in an organization
     *
     * Use this endpoint to remove authorized access to all google calendar users.
     * Calendars will no longer be synced for resources
    **/
    deleteSetupV1LocationsIdGoogleServiceAccount(req: operations.DeleteSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * deleteSetupV1LocationsIdServices - Deletes all location services from the specified location
     *
     * Use this endpoint to delete all location services for a location
    **/
    deleteSetupV1LocationsIdServices(req: operations.DeleteSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsIdServicesResponse>;
    /**
     * deleteSetupV1LocationsServicesId - Deletes a location service from the specified location
     *
     * Use this endpoint to delete a location service for a location
    **/
    deleteSetupV1LocationsServicesId(req: operations.DeleteSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1LocationsServicesIdResponse>;
    /**
     * deleteSetupV1ResourcegroupsId - Deletes a resource group object.
     *
     * Use this endpoint to delete a resource group. The resource group is not permanently deleted and can be recovered.
    **/
    deleteSetupV1ResourcegroupsId(req: operations.DeleteSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcegroupsIdResponse>;
    /**
     * deleteSetupV1ResourcesAllocationsId - Delete a resource allocation object
     *
     * Deletes a resource allocation.
    **/
    deleteSetupV1ResourcesAllocationsId(req: operations.DeleteSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesAllocationsIdResponse>;
    /**
     * deleteSetupV1ResourcesBlockId - Delete a resource block object
     *
     * Deletes a resource block.
    **/
    deleteSetupV1ResourcesBlockId(req: operations.DeleteSetupV1ResourcesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesBlockIdResponse>;
    /**
     * deleteSetupV1ResourcesId - Deletes a resource object.
     *
     * Use this endpoint to delete a resource. The resource is not permanently deleted and can be recovered.
    **/
    deleteSetupV1ResourcesId(req: operations.DeleteSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdResponse>;
    /**
     * deleteSetupV1ResourcesIdDeleteimage - Removes a resource image
     *
     * Use this endpoint to delete a previously uploaded resource image.
    **/
    deleteSetupV1ResourcesIdDeleteimage(req: operations.DeleteSetupV1ResourcesIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdDeleteimageResponse>;
    /**
     * deleteSetupV1ResourcesIdServices - Deletes resource services from the specified resource
     *
     * Use this endpoint to delete all resource services for a resource
    **/
    deleteSetupV1ResourcesIdServices(req: operations.DeleteSetupV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ResourcesIdServicesResponse>;
    /**
     * deleteSetupV1ServicesAllocationsId - Delete a service allocation object
     *
     * Deletes a service allocation.
    **/
    deleteSetupV1ServicesAllocationsId(req: operations.DeleteSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesAllocationsIdResponse>;
    /**
     * deleteSetupV1ServicesBlockId - Delete a service block object
     *
     * Deletes a service block.
    **/
    deleteSetupV1ServicesBlockId(req: operations.DeleteSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesBlockIdResponse>;
    /**
     * deleteSetupV1ServicesBookingwindowsId - Permanently deletes bookingWindow object.
     *
     * Use this endpoint to permanently delete a bookingWindow.
    **/
    deleteSetupV1ServicesBookingwindowsId(req: operations.DeleteSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesBookingwindowsIdResponse>;
    deleteSetupV1ServicesCalendarId(req: operations.DeleteSetupV1ServicesCalendarIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesCalendarIdResponse>;
    /**
     * deleteSetupV1ServicesId - Deletes a service object.
     *
     * Use this endpoint to delete a service. The service is not permanently deleted and can be recovered.
    **/
    deleteSetupV1ServicesId(req: operations.DeleteSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdResponse>;
    /**
     * deleteSetupV1ServicesIdDeleteimage - Removes a service image
     *
     * Use this endpoint to delete a previously uploaded service image.
    **/
    deleteSetupV1ServicesIdDeleteimage(req: operations.DeleteSetupV1ServicesIdDeleteimageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1ServicesIdDeleteimageResponse>;
    getPlanId(req: operations.GetPlanIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanIdResponse>;
    /**
     * getSetupV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Appointments(req: operations.GetSetupV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsResponse>;
    /**
     * getSetupV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment.
     *
     * Find appointment id's using the GET consumer/v1/appointments end point.
    **/
    getSetupV1AppointmentsId(req: operations.GetSetupV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1AppointmentsIdResponse>;
    /**
     * getSetupV1Businessusers - Returns a list of business users.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Businessusers(req: operations.GetSetupV1BusinessusersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersResponse>;
    /**
     * getSetupV1BusinessusersEmailCompanies - Returns a list of companies for the business user.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1BusinessusersEmailCompanies(req: operations.GetSetupV1BusinessusersEmailCompaniesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersEmailCompaniesResponse>;
    /**
     * getSetupV1BusinessusersId - Returns a businessUser object.
     *
     * The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
    **/
    getSetupV1BusinessusersId(req: operations.GetSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersIdResponse>;
    /**
     * getSetupV1BusinessusersPermissions - Returns a list of system roles and permission.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1BusinessusersPermissions(req: operations.GetSetupV1BusinessusersPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersPermissionsResponse>;
    /**
     * getSetupV1Calendars - Returns a list of calendars.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Calendars(req: operations.GetSetupV1CalendarsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsResponse>;
    /**
     * getSetupV1CalendarsBlocksId - Update a calendar block
    **/
    getSetupV1CalendarsBlocksId(req: operations.GetSetupV1CalendarsBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsBlocksIdResponse>;
    /**
     * getSetupV1CalendarsId - Returns a calendar object.
     *
     * The result returned is a single calendar object. An id is required to find the calendar.
    **/
    getSetupV1CalendarsId(req: operations.GetSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdResponse>;
    /**
     * getSetupV1CalendarsIdBlocks - Returns a list of calendar blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1CalendarsIdBlocks(req: operations.GetSetupV1CalendarsIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdBlocksResponse>;
    /**
     * getSetupV1CalendarsIdServices - Returns a list of services linked to a calendar.
     *
     * The result returned is a list of services. An id is required to find the service. Find calendar id's using either the GET setup/v1/calendars end point
    **/
    getSetupV1CalendarsIdServices(req: operations.GetSetupV1CalendarsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CalendarsIdServicesResponse>;
    /**
     * getSetupV1Companies - Returns a company profile information of the authorized company
    **/
    getSetupV1Companies(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesResponse>;
    /**
     * getSetupV1CompaniesDomains - Returns a list of whitelisted domains for the authorized company
    **/
    getSetupV1CompaniesDomains(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsResponse>;
    /**
     * getSetupV1CompaniesDomainsId - Returns a whitelisted domain for the authorized company
    **/
    getSetupV1CompaniesDomainsId(req: operations.GetSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesDomainsIdResponse>;
    /**
     * getSetupV1CompaniesEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * This endpoint returns only company level templates so the scope is always company
    **/
    getSetupV1CompaniesEmailTemplates(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesResponse>;
    /**
     * getSetupV1CompaniesEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    getSetupV1CompaniesEmailTemplatesMaster(config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * getSetupV1CompaniesEmailTemplatesTemplateName - Returns default or custom email template from the authorized company
     *
     * The default email template is returned when a custom template is not found
     * The response content is in html format.
    **/
    getSetupV1CompaniesEmailTemplatesTemplateName(req: operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse>;
    /**
     * getSetupV1CompaniesRegions - Returns a list of regions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1CompaniesRegions(req: operations.GetSetupV1CompaniesRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsResponse>;
    /**
     * getSetupV1CompaniesRegionsId - Get a Region
    **/
    getSetupV1CompaniesRegionsId(req: operations.GetSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesRegionsIdResponse>;
    /**
     * getSetupV1CompaniesTimezonesDate - Returns timezone information for all supported Timezone's
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getSetupV1CompaniesTimezonesDate(req: operations.GetSetupV1CompaniesTimezonesDateRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CompaniesTimezonesDateResponse>;
    /**
     * getSetupV1Customers - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Customers(req: operations.GetSetupV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersResponse>;
    /**
     * getSetupV1CustomersId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    getSetupV1CustomersId(req: operations.GetSetupV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdResponse>;
    /**
     * getSetupV1CustomersIdPrivacy - Returns a customer privacy report data.
     *
     * The result returned contains customer data and customer appointments data
    **/
    getSetupV1CustomersIdPrivacy(req: operations.GetSetupV1CustomersIdPrivacyRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1CustomersIdPrivacyResponse>;
    /**
     * getSetupV1Locations - Returns a list of business locations.
     *
     * Use this api end point if you have multiple business locations in your company.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Locations(req: operations.GetSetupV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsResponse>;
    /**
     * getSetupV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getSetupV1LocationsId(req: operations.GetSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * Only when querying the primary business location will company scope
     * customized templates display. Otherwise, the scope shows if a template has been customized
     * at the business location level.
    **/
    getSetupV1LocationsIdEmailTemplates(req: operations.GetSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    getSetupV1LocationsIdEmailTemplatesMaster(req: operations.GetSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * getSetupV1LocationsIdEmailTemplatesTemplateName - Returns company default or custom email template from the specified location
     *
     * These are custom email templates defined with Business Scope at a location other than the primary.
     * The default email template is returned when a custom email template is not found.
    **/
    getSetupV1LocationsIdEmailTemplatesTemplateName(req: operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse>;
    /**
     * getSetupV1LocationsIdGoogleServiceAccount - Returns google service account info
     *
     * This endpoint will not go to production. It is temporary.
    **/
    getSetupV1LocationsIdGoogleServiceAccount(req: operations.GetSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * getSetupV1LocationsIdServices - Returns a list of location services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1LocationsIdServices(req: operations.GetSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsIdServicesResponse>;
    /**
     * getSetupV1LocationsServicesId - Returns a single location services.
    **/
    getSetupV1LocationsServicesId(req: operations.GetSetupV1LocationsServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1LocationsServicesIdResponse>;
    /**
     * getSetupV1Resourcegroups - Returns a list of resourcegroups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Resourcegroups(req: operations.GetSetupV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsResponse>;
    /**
     * getSetupV1ResourcegroupsId - Returns a resourceGroup object.
     *
     * The result returned is a single resourceGroup object. An id is required to find the service. Find resourceGroup id's using the GET setup/v1/resourceGroups end point
    **/
    getSetupV1ResourcegroupsId(req: operations.GetSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcegroupsIdResponse>;
    /**
     * getSetupV1Resources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Resources(req: operations.GetSetupV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesResponse>;
    /**
     * getSetupV1ResourcesAllocationsId - Update a resource allocation
    **/
    getSetupV1ResourcesAllocationsId(req: operations.GetSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesAllocationsIdResponse>;
    /**
     * getSetupV1ResourcesBlocksId - Update a resource block
    **/
    getSetupV1ResourcesBlocksId(req: operations.GetSetupV1ResourcesBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesBlocksIdResponse>;
    /**
     * getSetupV1ResourcesId - Returns a resource object.
     *
     * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getSetupV1ResourcesId(req: operations.GetSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdResponse>;
    /**
     * getSetupV1ResourcesIdAllocations - Returns a list of resource allocations.
     *
     * Resource allocations allow you to specify explicitly the times you are available as opposed to
     * generating resource availability from the times that are not unavailable.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ResourcesIdAllocations(req: operations.GetSetupV1ResourcesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdAllocationsResponse>;
    /**
     * getSetupV1ResourcesIdAvailability - Returns a list of weekly availability
     *
     * Use this endpoint to get weekly availability for a resource. The displayed
     * available times represent the resource timezone. The resource timezone can
     * be set to any world timezone. By default it is set to the Business timezone.
    **/
    getSetupV1ResourcesIdAvailability(req: operations.GetSetupV1ResourcesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdAvailabilityResponse>;
    /**
     * getSetupV1ResourcesIdBlocks - Returns a list of resource blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ResourcesIdBlocks(req: operations.GetSetupV1ResourcesIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdBlocksResponse>;
    /**
     * getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress - Returns a resource object.
     *
     * The result returned contains the google calendar authorization url
    **/
    getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddress(req: operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressResponse>;
    /**
     * getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress - Returns a resource object.
     *
     * The result returned contains the outlook calendar authorization url
    **/
    getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddress(req: operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressResponse>;
    getSetupV1ResourcesTimezones(config?: AxiosRequestConfig): Promise<operations.GetSetupV1ResourcesTimezonesResponse>;
    /**
     * getSetupV1Services - Returns a list of services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Services(req: operations.GetSetupV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesResponse>;
    /**
     * getSetupV1ServicesAllocationsId - Get a service allocation
    **/
    getSetupV1ServicesAllocationsId(req: operations.GetSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesAllocationsIdResponse>;
    /**
     * getSetupV1ServicesBlocksId - Get a service block
    **/
    getSetupV1ServicesBlocksId(req: operations.GetSetupV1ServicesBlocksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesBlocksIdResponse>;
    /**
     * getSetupV1ServicesBookingwindowsId - Get a booking window
    **/
    getSetupV1ServicesBookingwindowsId(req: operations.GetSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesBookingwindowsIdResponse>;
    /**
     * getSetupV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getSetupV1ServicesId(req: operations.GetSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResponse>;
    /**
     * getSetupV1ServicesIdAllocations - Returns a list of service allocations.
     *
     * This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event
     * against the service.
     *
     * You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
     * pass in the service id.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdAllocations(req: operations.GetSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAllocationsResponse>;
    /**
     * getSetupV1ServicesIdAvailability - Returns a list of weekly availability
     *
     * Use this endpoint to get weekly availability for a service.
    **/
    getSetupV1ServicesIdAvailability(req: operations.GetSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdAvailabilityResponse>;
    /**
     * getSetupV1ServicesIdBlocks - Returns a list of service blocks.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdBlocks(req: operations.GetSetupV1ServicesIdBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdBlocksResponse>;
    /**
     * getSetupV1ServicesIdBookingwindows - Returns a list of service booking windows.
     *
     * This endpoint is used to retrieve any booking windows related to the service
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdBookingwindows(req: operations.GetSetupV1ServicesIdBookingwindowsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdBookingwindowsResponse>;
    /**
     * getSetupV1ServicesIdCalendar - Returns the linked calendar for the service
     *
     * Use this endpoint to get the linked calendar for the service.
     * A service can only be linked to one calendar in a location.
    **/
    getSetupV1ServicesIdCalendar(req: operations.GetSetupV1ServicesIdCalendarRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdCalendarResponse>;
    /**
     * getSetupV1ServicesIdResources - Returns a list of resources for the specified service.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1ServicesIdResources(req: operations.GetSetupV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1ServicesIdResourcesResponse>;
    /**
     * postSetupV1Businessusers - Creates a new businessUser object.
     *
     * Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
     * Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required.
     * For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
     *
     * Business Roles:
     * bizowner (Business Owner)
     * bizadmin (Business Administrator)
     * bizresource (Business User - Bookable Resource)
     * bizclerk (Business User - Portal Booking Privileges)
     * bizuser (Business User - Portal View Only Privileges)
    **/
    postSetupV1Businessusers(req: operations.PostSetupV1BusinessusersRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1BusinessusersResponse>;
    /**
     * postSetupV1Calendars - Creates a new calendar object.
     *
     * Use this endpoint to create an additional calendar. If not specified, the business location id defaults to the primary location of the company.<br /><br />
     * Note: Every location has a primary calendar. All appointments will be booked to that calendar unless otherwise specified with a linked service.<br /><br />
     * name is a required parameter<br /><br />
     * type is a required parameter with a value of “resource”<br /><br />
     * interval is a required parameter with a value of 1,5,10,15,20,30,60<br /><br />
     * bookingsPerSlot is a required parameter with a value between 1 and 20<br /><br />
     * scheduleGroupId is an optional parameter.If supplied, it must be a valid Resource Group Id<br /><br />
     * weekly availability is optional.If this element is not populated, then weekly availability defaults to the business hours<br /><br />
    **/
    postSetupV1Calendars(req: operations.PostSetupV1CalendarsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CalendarsResponse>;
    /**
     * postSetupV1CalendarsIdBlock - Create a new calendar block
     *
     * Creates a new calendar block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Calendar blocks can be set to specific time ranges or for the whole day.
     *
     * Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily blocks will repeat for each day of the week for the date range specified.
     *
     * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat blocks will end on the date specified by the end date. You can specify never in the EndDateTime field to indicate the repeating block
     * should continue indefinitely.
    **/
    postSetupV1CalendarsIdBlock(req: operations.PostSetupV1CalendarsIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CalendarsIdBlockResponse>;
    /**
     * postSetupV1Companies - Creates a company profile.
     *
     * Use this endpoint to create a new Company Profile.
     * This endpoint is restricted by scope and limited to use by OnSched internal apps
     *
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    postSetupV1Companies(req: operations.PostSetupV1CompaniesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesResponse>;
    /**
     * postSetupV1CompaniesDomains - Creates a whitelisted domain for the authorized company
     * Returns view of domain created
    **/
    postSetupV1CompaniesDomains(req: operations.PostSetupV1CompaniesDomainsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesDomainsResponse>;
    /**
     * postSetupV1CompaniesEmailTemplatesMaster - Updates / creates custom master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    postSetupV1CompaniesEmailTemplatesMaster(req: operations.PostSetupV1CompaniesEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesEmailTemplatesMasterResponse>;
    /**
     * postSetupV1CompaniesRegions - Create a new region
     *
     * Creates a new region.
     *
     * Regions can be mapped to business locations. Locations can be filtered by region id
    **/
    postSetupV1CompaniesRegions(req: operations.PostSetupV1CompaniesRegionsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1CompaniesRegionsResponse>;
    /**
     * postSetupV1Locations - Creates a new location object.
     *
     * Use this endpoint to create a new business location.
     *
     * Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
     * can define their own settings that override the company level settings.
     *
     * If you wish to update settings then pass in the settings element in the input.
     * When you are working with the Primary location, then the settings will update the company level settings.
     * Otherwise, the settings will update business location settings.
     *
     * If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
    **/
    postSetupV1Locations(req: operations.PostSetupV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsResponse>;
    /**
     * postSetupV1LocationsBulk - Creates new location objects.
     *
     * Use this endpoint to create new business locations. The incoming list of
     * locations cannot exceed 100 location objects for performance purposes.
     *
     * Each location object may consist of:
     * Name: The Name of the location.
     * AdminName: The Name of the location admin.
     * AdminEmail: The email address of the location admin.
     * TimezoneName: The IANA formatted name of the locations timezone.
     * FriendlyId: A friendly id to use to refer to the location.
     * Address: The physical address of the location.
     * BusinessHours: The hours of operation of the location.
     * Settings: Additional location options that can affect things like
     * the book ahead restrictions, customer bookings per day, etc.
    **/
    postSetupV1LocationsBulk(req: operations.PostSetupV1LocationsBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsBulkResponse>;
    /**
     * postSetupV1LocationsIdEmailTemplates - Uploads a custom email template
     *
     * Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
     * Updates to the primary business location create company scoped custom templates
     * Updates to non primary business locations create business location scoped custom templates
     * The master template cannot be updated with this endpoint.
    **/
    postSetupV1LocationsIdEmailTemplates(req: operations.PostSetupV1LocationsIdEmailTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesResponse>;
    /**
     * postSetupV1LocationsIdEmailTemplatesMaster - Saves settings for the master email template
     *
     * Use this endpoint to a customize the master email template settings.
     * Updates to the primary business location create company scoped master email template custom settings
     * Updates to non primary business locations create business location scoped master email template custom settings
    **/
    postSetupV1LocationsIdEmailTemplatesMaster(req: operations.PostSetupV1LocationsIdEmailTemplatesMasterRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse>;
    /**
     * postSetupV1LocationsIdGoogleServiceAccount - Authorize access to all google calendar users in an organization
     *
     * Use this endpoint to authorize access to all google calendar users.
     * You must create a Google Service account as an admin of your GSuite,
     * then save credentials as a Json Key file
    **/
    postSetupV1LocationsIdGoogleServiceAccount(req: operations.PostSetupV1LocationsIdGoogleServiceAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdGoogleServiceAccountResponse>;
    /**
     * postSetupV1LocationsIdServices - Adds location services to the specified location
     *
     * Use this endpoint to explicitly define what company scoped services
     * at this location are offered. GET locations allows serviceId as a
     * search parameter.
    **/
    postSetupV1LocationsIdServices(req: operations.PostSetupV1LocationsIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdServicesResponse>;
    /**
     * postSetupV1LocationsIdUploadimage - Uploads a location image
     *
     * Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    postSetupV1LocationsIdUploadimage(req: operations.PostSetupV1LocationsIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1LocationsIdUploadimageResponse>;
    /**
     * postSetupV1Resourcegroups - Creates a new resource group object.
     *
     * Use this endpoint to create a new resource. If not specified the business location id defaults to the first location in the company.
     * Email Address and a Name are required for creating a new resource.
    **/
    postSetupV1Resourcegroups(req: operations.PostSetupV1ResourcegroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcegroupsResponse>;
    /**
     * postSetupV1Resources - Creates a new resource object.
     *
     * Use this endpoint to create a new resource. If not specified, the business location id defaults to the first location in the company.<br /><br />
     * Email Address and a Name are required for creating a new resource. <br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services. <br /><br />
    **/
    postSetupV1Resources(req: operations.PostSetupV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesResponse>;
    /**
     * postSetupV1ResourcesBulk - Creates new resource objects.
     *
     * Use this endpoint to create new resources. If not specified the business location id defaults to the first location in the company.<br /><br />
     * Email Address and a Name are required for creating each new resource.<br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resources,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    postSetupV1ResourcesBulk(req: operations.PostSetupV1ResourcesBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesBulkResponse>;
    /**
     * postSetupV1ResourcesIdAllocations - Create a new resource allocation
     *
     * Creates a new resource allocation. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is optional. This reason will display in the OnSched Portal Calendar.
     *
     * Resource allocations can be set to specific time ranges or for the whole day.
     *
     * Resource allocations can repeat for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily allocations will repeat for each day of the week for the date range specified.
     *
     * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly allocation means that
     * the allocation will repeat every second week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    postSetupV1ResourcesIdAllocations(req: operations.PostSetupV1ResourcesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdAllocationsResponse>;
    /**
     * postSetupV1ResourcesIdBlock - Create a new resource block
     *
     * Creates a new resource block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Resource blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     *
     * Resource blocks can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily blocks will repeat for each day of the week for the date range specified.
     *
     * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    postSetupV1ResourcesIdBlock(req: operations.PostSetupV1ResourcesIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdBlockResponse>;
    /**
     * postSetupV1ResourcesIdServices - Adds resource services to the specified resource
     *
     * Use this endpoint to add resource services
    **/
    postSetupV1ResourcesIdServices(req: operations.PostSetupV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdServicesResponse>;
    /**
     * postSetupV1ResourcesIdUploadimage - Uploads a resource image
     *
     * Use this endpoint to upload a resource image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    postSetupV1ResourcesIdUploadimage(req: operations.PostSetupV1ResourcesIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ResourcesIdUploadimageResponse>;
    /**
     * postSetupV1Services - Creates a new service object.
     *
     * Use this endpoint to create a new service. If not specified the business location id defaults to the first location in the company.
     * The service Type defaults to 1 if not entered.
     * The service Type can be one of the following values:
     * 1 = Appointment
     * 2 = Event
     * 3 = Meeting
    **/
    postSetupV1Services(req: operations.PostSetupV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesResponse>;
    /**
     * postSetupV1ServicesBookingwindows - Creates a new bookingWindow object.
     *
     * Use this endpoint to create a new bookingWindow.
    **/
    postSetupV1ServicesBookingwindows(req: operations.PostSetupV1ServicesBookingwindowsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesBookingwindowsResponse>;
    /**
     * postSetupV1ServicesCalendar - Links the service to a calendar
     *
     * Use this endpoint to link a service to a calendar.
    **/
    postSetupV1ServicesCalendar(req: operations.PostSetupV1ServicesCalendarRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesCalendarResponse>;
    /**
     * postSetupV1ServicesIdAllocations - Create a new service allocation
     *
     * Creates a new service allocation. You must specify a StartDate and EndDate.
     * A reason for the allocation is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Service allocations are used primarily for event type services. The allocation represents an occurrence of an allocation.
     *
     * Service allocations can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     *
     * Service allocations can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily allocations will repeat for each day of the week for the date range specified.
     *
     * Weekly allocations will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the allocation repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly allocations repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat allocations will end on the date specified by the end date. You can specify 9999-12-31 in the EndDate field to indicate the repeating block
     * should continue indefinitely.
    **/
    postSetupV1ServicesIdAllocations(req: operations.PostSetupV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsResponse>;
    /**
     * postSetupV1ServicesIdAllocationsBulk - Create new service allocations in bulk
     *
     * Creates new service allocations in bulk. Refer to documentation
     * for creating a single Service Allocation POST /setup/v1/services/{id}/allocations
     * for understanding how to populate the properties
     *
     * Use this endpoint only if you need to POST multiple allocations in one call
    **/
    postSetupV1ServicesIdAllocationsBulk(req: operations.PostSetupV1ServicesIdAllocationsBulkRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdAllocationsBulkResponse>;
    /**
     * postSetupV1ServicesIdBlock - Create a new service block
     *
     * Creates a new service block. You must specify a StartDateTime and EndDateTime.
     * A reason for the block is also required. This reason will display in the OnSched Portal Calendar.
     *
     * Service blocks can be set to specific time ranges or for the whole day. Use the AllDay setting to create an all day block.
     *
     * Service blocks can be for a specific date range instance or set to repeat at a specified frequency.
     * The frequency can be set to a value of D,W,M,Y for Day, Week, Month, or Year respecitively.
     *
     * Daily blocks will repeat for each day of the week for the date range specified.
     *
     * Weekly blocks will repeat only on the specified days of the week for the date range specified. For a weekly block
     * you must also specify the weekdays. Weekdays are expressed as a string of digits with each single digit in the string representing a day
     * of the week. The possible values are 0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wed, 4=Thursday, 5=Friday, 6=Saturday.
     * For example a repeat weekly entry with weekdays 24 repeats each week on Tuesday and Thursday.
     *
     * Use the interval property to specify the interval that the block repeats. For example an interval of 2 for a weekly block means that
     * the block will repeat every second week beginning at the day specified. A daily block with an interval of 10 means the block will
     * repeat every 10 days. The interval property applies to all repeat frequencies.
     *
     * Monthly blocks repeat either on the day of the month specified in the month day property or on the day of the week and week of the month specified by
     * the start date. For example, repeat every 3rd friday of each month, repeat on the 21st day of the month.
     *
     * Repeat blocks will end on the date specified by the end date. You can specify 9999-12-31 in
     * the EndDate field to indicate the repeating block should continue indefinitely.
    **/
    postSetupV1ServicesIdBlock(req: operations.PostSetupV1ServicesIdBlockRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdBlockResponse>;
    /**
     * postSetupV1ServicesIdUploadimage - Uploads a service image
     *
     * Use this endpoint to upload a service image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    postSetupV1ServicesIdUploadimage(req: operations.PostSetupV1ServicesIdUploadimageRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1ServicesIdUploadimageResponse>;
    /**
     * putSetupV1AppointmentsIdReassignResourceResourceId - Reassigns the appointment to the supplied resourceId
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment.
     *
     * Find appointment id's using the GET consumer/v1/appointments end point.
    **/
    putSetupV1AppointmentsIdReassignResourceResourceId(req: operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse>;
    /**
     * putSetupV1BusinessusersId - Updates a businessUser object.
     *
     * Use this endpoint to update a businessUser.
    **/
    putSetupV1BusinessusersId(req: operations.PutSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1BusinessusersIdResponse>;
    /**
     * putSetupV1CalendarsBlockId - Update a calendar block
     *
     * Updates a calendar block. Refer to the details in the POST calendar block for setting each of the required parameters.
    **/
    putSetupV1CalendarsBlockId(req: operations.PutSetupV1CalendarsBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsBlockIdResponse>;
    /**
     * putSetupV1CalendarsId - Updates a calendar object.
     *
     * Use this endpoint to update a calendar.
     * Calendar availability is optional. If this element is not populated then weekly availability is not updated
    **/
    putSetupV1CalendarsId(req: operations.PutSetupV1CalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsIdResponse>;
    /**
     * putSetupV1CalendarsIdRecover - Recovers a calendar object.
     *
     * Use this endpoint to recover a deleted calendar.
    **/
    putSetupV1CalendarsIdRecover(req: operations.PutSetupV1CalendarsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CalendarsIdRecoverResponse>;
    /**
     * putSetupV1Companies - Updates a company object.
     *
     * Use this endpoint to update the authorized company.
     *
     * Your client credentials resolve to a single company.
     *
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    putSetupV1Companies(req: operations.PutSetupV1CompaniesRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesResponse>;
    /**
     * putSetupV1CompaniesDomainsId - Updates a whitelisted domain for the authorized company
     * Returns view of domain updated
    **/
    putSetupV1CompaniesDomainsId(req: operations.PutSetupV1CompaniesDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesDomainsIdResponse>;
    /**
     * putSetupV1CompaniesRegionsId - Update a region
     *
     * Updates a region.
     *
     * Regions can be mapped to business locations. Locations can be filtered by region id.
    **/
    putSetupV1CompaniesRegionsId(req: operations.PutSetupV1CompaniesRegionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1CompaniesRegionsIdResponse>;
    /**
     * putSetupV1LocationsId - Use this endpoint to change the scope of online booking settings
     *
     * Use this endpoint to update a business location.
     *
     * The optional removeRegion query parameter is used to remove the region relationship from the location
     *
     * If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
     *
     * If all your settings are uniform across all locations then do not pass settings and the location will use the settings
     * defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
     * that needs different settings by providing settings in the update model.
    **/
    putSetupV1LocationsId(req: operations.PutSetupV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdResponse>;
    /**
     * putSetupV1LocationsIdHolidaysHolidayIdClosed - Sets a business holiday to open or closed.
     *
     * Use this endpoint to set business holidays to open or closed.
     *
     * If you pass in an asterisk for the holidayId then all business holidays
     * will be set to the valaue
    **/
    putSetupV1LocationsIdHolidaysHolidayIdClosed(req: operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse>;
    /**
     * putSetupV1LocationsIdRecover - Recovers a location object.
     *
     * Use this endpoint to recover a deleted business location.
    **/
    putSetupV1LocationsIdRecover(req: operations.PutSetupV1LocationsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdRecoverResponse>;
    /**
     * putSetupV1LocationsIdSettingsScopeSettingsScope - Changes the scope of OnlineBooking Settings.
     *
     * Use this endpoint to update a business location.
     *
     * settingsScope values are 0 = company scope, 1 = business location scope
     * if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
     * Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
     * ///
    **/
    putSetupV1LocationsIdSettingsScopeSettingsScope(req: operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse>;
    /**
     * putSetupV1ResourcegroupsId - Updates a resource group object.
     *
     * Use this endpoint to update a resource group.
    **/
    putSetupV1ResourcegroupsId(req: operations.PutSetupV1ResourcegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdResponse>;
    /**
     * putSetupV1ResourcegroupsIdRecover - Recovers a resource group object.
     *
     * Use this endpoint to recover a deleted resource group.
    **/
    putSetupV1ResourcegroupsIdRecover(req: operations.PutSetupV1ResourcegroupsIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcegroupsIdRecoverResponse>;
    /**
     * putSetupV1ResourcesAllocationsId - Update a resource allocation
     *
     * Updates a resource allocation. Refer to the details in the POST resource allocation for setting each of the required parameters.
    **/
    putSetupV1ResourcesAllocationsId(req: operations.PutSetupV1ResourcesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesAllocationsIdResponse>;
    /**
     * putSetupV1ResourcesBlockId - Update a resource block
     *
     * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
    **/
    putSetupV1ResourcesBlockId(req: operations.PutSetupV1ResourcesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesBlockIdResponse>;
    /**
     * putSetupV1ResourcesBulk - Updates resource objects.
     *
     * Use this endpoint to update multiple resources.<br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the each resource,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    putSetupV1ResourcesBulk(req: operations.PutSetupV1ResourcesBulkRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesBulkResponse>;
    /**
     * putSetupV1ResourcesId - Updates a resource object.
     *
     * Use this endpoint to update a resource. <br /><br />
     * Passing in a single or many serviceId(s) in the service array will result in those service(s) being associated with the resource,
     * while passing in an empty array will result in all services being selected. This includes company and business scoped services.<br /><br />
    **/
    putSetupV1ResourcesId(req: operations.PutSetupV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdResponse>;
    /**
     * putSetupV1ResourcesIdAvailability - Updates Weekly Availability
     *
     * Use this endpoint to update resource availability. The Id parameter specifies the resource
     * for which you are updating availability. Availability day entries do not need to be created.
     * The availbility day entries are created when a resource object is created. They default to
     * the business hours.
     *
     * Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
     * Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
     *
     * OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
     *
     * To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
     * to be unavailable, use the resource blocks endpoints.
     *
     * Times entered represent the
     * timezone of the resource. Resources can belong to any world timezone.
    **/
    putSetupV1ResourcesIdAvailability(req: operations.PutSetupV1ResourcesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdAvailabilityResponse>;
    /**
     * putSetupV1ResourcesIdReassignAppointmentsResourceId - Reassigns appointments to another resource
     *
     * Use this endpoint to reassign appointments from one resource to another.
     * If the startDate is not supplied, the default is today's date + 1 day;
     * If the endDate is not supplied, all future appointments from the start date will be reassigned
     * If the calendarId is not supplied the default is the primary calendar of the location.
    **/
    putSetupV1ResourcesIdReassignAppointmentsResourceId(req: operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdReassignAppointmentsResourceIdResponse>;
    /**
     * putSetupV1ResourcesIdRecover - Recovers a resource object.
     *
     * Use this endpoint to recover a deleted resource.
    **/
    putSetupV1ResourcesIdRecover(req: operations.PutSetupV1ResourcesIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ResourcesIdRecoverResponse>;
    /**
     * putSetupV1ServicesAllocationsId - Update a service allocation
     *
     * Updates a service allocation. Refer to the details in the POST service allocation for setting each of the required parameters.
    **/
    putSetupV1ServicesAllocationsId(req: operations.PutSetupV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesAllocationsIdResponse>;
    /**
     * putSetupV1ServicesBlockId - Update a service block
     *
     * Updates a resource block. Refer to the details in the POST resource block for setting each of the required parameters.
    **/
    putSetupV1ServicesBlockId(req: operations.PutSetupV1ServicesBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesBlockIdResponse>;
    /**
     * putSetupV1ServicesBookingwindowsId - Updates a bookingWindow object.
     *
     * Use this endpoint to update a booking window
    **/
    putSetupV1ServicesBookingwindowsId(req: operations.PutSetupV1ServicesBookingwindowsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesBookingwindowsIdResponse>;
    /**
     * putSetupV1ServicesId - Updates a service object.
     *
     * Use this endpoint to update a service.
    **/
    putSetupV1ServicesId(req: operations.PutSetupV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdResponse>;
    /**
     * putSetupV1ServicesIdAvailability - Updates Weekly Availability
     *
     * Use this endpoint to update service availability. The Id parameter specifies the service
     * for which you are updating availability. Availability day entries do not need to be created.
     * The availbility day entries are created when a service object is created. They default to
     * the business hours.
     *
     * Create an entry for each weekday you wish to update. Days are defined as sun,mon,tue,wed,thu,fri,sat.
     * Start and End Times are entered in miltary format. e.g 2230 is 10:30pm.
     *
     * OnSched API provides support for 24 hour availability. For midnight start of day use 0. For midnight end of day use 2400.
     *
     * To set a day as unavailable, set both the StartTime and EndTime to 0. If you require times in between specified hours
     * to be unavailable, use the resource blocks endpoints.
     *
     * Times entered represent the timezone of the business location.
    **/
    putSetupV1ServicesIdAvailability(req: operations.PutSetupV1ServicesIdAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdAvailabilityResponse>;
    /**
     * putSetupV1ServicesIdRecover - Recovers a service object.
     *
     * Use this endpoint to recover a deleted service.
    **/
    putSetupV1ServicesIdRecover(req: operations.PutSetupV1ServicesIdRecoverRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1ServicesIdRecoverResponse>;
}
export {};
