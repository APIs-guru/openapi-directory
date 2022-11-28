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
     * deleteConsumerV1AppointmentsId - Returns an appointment object
     *
     * This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
     * Past dated appointments cannot be cancelled.<br /><br />
     *
     * A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    deleteConsumerV1AppointmentsId(req: operations.DeleteConsumerV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsumerV1AppointmentsIdResponse>;
    deleteConsumerV1CustomersId(req: operations.DeleteConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsumerV1CustomersIdResponse>;
    deleteConsumerV1CustomersSubscriptionsId(req: operations.DeleteConsumerV1CustomersSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConsumerV1CustomersSubscriptionsIdResponse>;
    /**
     * getConsumerV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
     * Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
     * This endpoint returns appoinments using paging. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    getConsumerV1Appointments(req: operations.GetConsumerV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsResponse>;
    /**
     * getConsumerV1AppointmentsBookingfields - Returns a list of appointment booking fields
     *
     * This end point returns Booking Field definitions.<br></br>
     *
     * Appointment booking fields are different than Customer booking fields. Appointment booking fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br></br>
     *
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/bookingfields.<br></br>
     *
     * Booking Fields include any custom appointment fields you wish to capture with the Booking and also
     * miscellaneous appointment attributes including address information.<br></br>
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    getConsumerV1AppointmentsBookingfields(req: operations.GetConsumerV1AppointmentsBookingfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsBookingfieldsResponse>;
    /**
     * getConsumerV1AppointmentsCustomfields - Returns a list of appointment custom field definitions
     *
     * This end point returns your Appointment custom field definitions.<br /><br />
     *
     * Appointment custom fields are different than Customer custom fields. Appointment custom fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit.<br /><br />
     *
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/customfields <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/custom-booking-fields">Appointment booking fields</a>
    **/
    getConsumerV1AppointmentsCustomfields(req: operations.GetConsumerV1AppointmentsCustomfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsCustomfieldsResponse>;
    /**
     * getConsumerV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
     *
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    getConsumerV1AppointmentsId(req: operations.GetConsumerV1AppointmentsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AppointmentsIdResponse>;
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDate - Returns a list of available times.
     *
     * Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
     * then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
     * for a specific resource by specifying the optional resourceId parameter.<br /><br />
     *
     * Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm.
     * You will only see availability within the boundary of your business start and end times.<br /><br />
     *
     *
     * dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
     *
     *
     * firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
     * by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
     * Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
     *
     * You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
     *
     *
     * The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you
     * use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
     *
     * Availabity can be complex. We provided an endpoint help you troubleshoot:
     * /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable.
     * This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
     *
     *
     * See more information at <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a>
    **/
    getConsumerV1AvailabilityServiceIdStartDateEndDate(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse>;
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateDays - Returns a list of available days.
     *
     * This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
     *
     * Day level availability is a good way to restrict your choices of dates in your app and improve usability.
    **/
    getConsumerV1AvailabilityServiceIdStartDateEndDateDays(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse>;
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateTimes - Returns a list of available times.
     *
     * <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.
     *             Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    getConsumerV1AvailabilityServiceIdStartDateEndDateTimes(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse>;
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable - Returns a list of unavailable times.
     *
     * This endpoint is used to show unavailable times and provides information why the time is unavailable.
    **/
    getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse>;
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateWindows - Returns a list of available booking window times.
     *
     * This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
     * Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    getConsumerV1AvailabilityServiceIdStartDateEndDateWindows(req: operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse>;
    /**
     * getConsumerV1Customers - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Customers(req: operations.GetConsumerV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersResponse>;
    /**
     * getConsumerV1CustomersBookingfields - Returns a list of customer booking fields
     *
     * This end point returns Booking Field definitions.
     *
     * Customer booking fields are different than Appointment booking fields. Customer booking fields are
     * stored with each customer. They are used when the information collected during the booking is specific
     * to a particular visit.
     *
     * Use the field, and type to determine how to update field values
     * in PUT /consumer/v1/appointments/{id}/book
     *
     * Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
     * miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
    **/
    getConsumerV1CustomersBookingfields(req: operations.GetConsumerV1CustomersBookingfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersBookingfieldsResponse>;
    /**
     * getConsumerV1CustomersCountries - Returns a list of country objects
     *
     * Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
    **/
    getConsumerV1CustomersCountries(config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersCountriesResponse>;
    /**
     * getConsumerV1CustomersCustomfields - Returns a list of customField objects
     *
     * This end point returns your Customer custom field definitions.
     *
     * Customer custom fields are different than Appointment custom fields. Appointment custom fields are
     * stored with each appointment. They are used when the information collected during the booking is specific
     * to a particular visit, where as Customer custom fields are stored with the customer profile.
     *
     * Use the key field, and type to determine how to update field values
     * in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
    **/
    getConsumerV1CustomersCustomfields(req: operations.GetConsumerV1CustomersCustomfieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersCustomfieldsResponse>;
    /**
     * getConsumerV1CustomersId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    getConsumerV1CustomersId(req: operations.GetConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersIdResponse>;
    /**
     * getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz - Returns a list of customer booking limits.
     *
     * The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
     * The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
     * You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
     * the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
     * subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
     * See customer plans setup in the Portal for more information.
     * All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
     * Format of the dateTimeTz field is 2018-10-30T10:00-5:00
    **/
    getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz(req: operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzResponse>;
    /**
     * getConsumerV1CustomersIdSubscriptions - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
    **/
    getConsumerV1CustomersIdSubscriptions(req: operations.GetConsumerV1CustomersIdSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersIdSubscriptionsResponse>;
    /**
     * getConsumerV1CustomersPlans - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1CustomersPlans(req: operations.GetConsumerV1CustomersPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersPlansResponse>;
    /**
     * getConsumerV1CustomersPlansId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    getConsumerV1CustomersPlansId(req: operations.GetConsumerV1CustomersPlansIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersPlansIdResponse>;
    /**
     * getConsumerV1CustomersStates - Returns a list of state objects
     *
     * Returns a list of states with the associated state code and country.
     *
     * Contact us if states for your countries of operation are not currently loaded.
    **/
    getConsumerV1CustomersStates(req: operations.GetConsumerV1CustomersStatesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersStatesResponse>;
    /**
     * getConsumerV1CustomersSubscriptions - Returns a list of customer subscriptions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1CustomersSubscriptions(req: operations.GetConsumerV1CustomersSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersSubscriptionsResponse>;
    /**
     * getConsumerV1CustomersSubscriptionsId - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object.
    **/
    getConsumerV1CustomersSubscriptionsId(req: operations.GetConsumerV1CustomersSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1CustomersSubscriptionsIdResponse>;
    /**
     * getConsumerV1Locations - Returns a list of business locations.
     *
     * Use this api end point if you have multiple business locations in your company.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
     *
     * To leverage the search by serviceId, setup locationService's see endpoints in this controller.
     * Location services allow you to exclude company scoped services for locations that do not offer them.
     * You can explicitly define which services are offered or if none are defined then all services are offererd
    **/
    getConsumerV1Locations(req: operations.GetConsumerV1LocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1LocationsResponse>;
    /**
     * getConsumerV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    getConsumerV1LocationsId(req: operations.GetConsumerV1LocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1LocationsIdResponse>;
    /**
     * getConsumerV1Resources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Resources(req: operations.GetConsumerV1ResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesResponse>;
    /**
     * getConsumerV1ResourcesId - Returns a resource object.
     *
     * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getConsumerV1ResourcesId(req: operations.GetConsumerV1ResourcesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdResponse>;
    /**
     * getConsumerV1ResourcesIdServices - Returns a list of resource services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
     * Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
     * default all services can be booked for the resource.
    **/
    getConsumerV1ResourcesIdServices(req: operations.GetConsumerV1ResourcesIdServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ResourcesIdServicesResponse>;
    /**
     * getConsumerV1Servicegroups - Returns a list of service groups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Servicegroups(req: operations.GetConsumerV1ServicegroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsResponse>;
    /**
     * getConsumerV1ServicegroupsId - Returns a serviceGroup object.
     *
     * The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using
     * the GET consumer/v1/servicegroups end point,
    **/
    getConsumerV1ServicegroupsId(req: operations.GetConsumerV1ServicegroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicegroupsIdResponse>;
    /**
     * getConsumerV1Services - Returns a list of services.
     *
     * Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size.
     * Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Services(req: operations.GetConsumerV1ServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesResponse>;
    /**
     * getConsumerV1ServicesAllocationsId - Get a service allocation
    **/
    getConsumerV1ServicesAllocationsId(req: operations.GetConsumerV1ServicesAllocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesAllocationsIdResponse>;
    /**
     * getConsumerV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    getConsumerV1ServicesId(req: operations.GetConsumerV1ServicesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResponse>;
    /**
     * getConsumerV1ServicesIdAllocations - Returns a list of service allocations.
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
    getConsumerV1ServicesIdAllocations(req: operations.GetConsumerV1ServicesIdAllocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdAllocationsResponse>;
    /**
     * getConsumerV1ServicesIdResources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1ServicesIdResources(req: operations.GetConsumerV1ServicesIdResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1ServicesIdResourcesResponse>;
    /**
     * getConsumerV1Settings - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getConsumerV1Settings(req: operations.GetConsumerV1SettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetConsumerV1SettingsResponse>;
    getPlanId(req: operations.GetPlanIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanIdResponse>;
    /**
     * postConsumerV1Appointments - Returns an appointment object
     *
     * <p>This end point creates a new appointment in an Initial "IN" status. The exception is if completeBooking parameter set.</p>
     * <br />
     * <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
     * <br />
     * <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
     * <br />
     * <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
     * <br />
     * <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
     * <br />
     * <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
     * <br />
     * <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
     * <br />
     * <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to
     *              Primary Company Location or is associated with that business LocationId</p>
     * <br />
     * <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
     * <br />
     * <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
     *              to complete the booking. Either supply email and name or customerId with required information.
     *              Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
     * <br />
     * <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
     *              skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
     * <br />
     * <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
     * <br />
     * <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
     *              used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
     * <br />
     * <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
     * <br />
     * <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
     *              this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
     * <br />
     * <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
     * <br />
     * <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
     * <br />
     * <p>This information is returned from the availability/times endpoint. <br /><br />
     *              See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
     * <br />
    **/
    postConsumerV1Appointments(req: operations.PostConsumerV1AppointmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostConsumerV1AppointmentsResponse>;
    /**
     * postConsumerV1Customers - Creates a new customer object.
     *
     * Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
     * Email Address and a lastname are required for creating a new customer.
     * Type 0 = Person, Type 1 = Business
     * For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
    **/
    postConsumerV1Customers(req: operations.PostConsumerV1CustomersRequest, config?: AxiosRequestConfig): Promise<operations.PostConsumerV1CustomersResponse>;
    /**
     * postConsumerV1CustomersIdSubscriptions - Creates a new customer subscription object.
     *
     * Use this endpoint to create a new customer subscription.
    **/
    postConsumerV1CustomersIdSubscriptions(req: operations.PostConsumerV1CustomersIdSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostConsumerV1CustomersIdSubscriptionsResponse>;
    /**
     * putConsumerV1AppointmentsIdBook - Returns an appointment object
     *
     * This end point completes a new booking. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking. <br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
     *
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a> and
     * <a href="https://onsched.readme.io/docs/custom-booking-fields">Custom Booking Fields</a>
    **/
    putConsumerV1AppointmentsIdBook(req: operations.PutConsumerV1AppointmentsIdBookRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdBookResponse>;
    /**
     * putConsumerV1AppointmentsIdCancel - Returns an appointment object
     *
     * This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
     * Past dated appointments cannot be cancelled. <br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    putConsumerV1AppointmentsIdCancel(req: operations.PutConsumerV1AppointmentsIdCancelRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdCancelResponse>;
    /**
     * putConsumerV1AppointmentsIdConfirm - Set the Appointment Confirm property to true or false
    **/
    putConsumerV1AppointmentsIdConfirm(req: operations.PutConsumerV1AppointmentsIdConfirmRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdConfirmResponse>;
    /**
     * putConsumerV1AppointmentsIdNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    putConsumerV1AppointmentsIdNoshow(req: operations.PutConsumerV1AppointmentsIdNoshowRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdNoshowResponse>;
    /**
     * putConsumerV1AppointmentsIdReschedule - Returns an appointment object
     *
     * This end point reschedules a booking. Only appointments in a "BK" booked status can be rescheduled.
     * Past dated appointments cannot be cancelled.<br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
     *
     * StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
     *
     * The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId.
     * The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
     *
     * Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
     * for the end user to choose from to reschedule the original appointment.<br /><br />
     *
     * You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
     *
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    putConsumerV1AppointmentsIdReschedule(req: operations.PutConsumerV1AppointmentsIdRescheduleRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdRescheduleResponse>;
    /**
     * putConsumerV1AppointmentsIdReserve - Returns an appointment object
     *
     * This end point completes a new reservation. Only appointments in the "IN" initial status can be booked.
     * by saving all the relevant details of the booking.<br /><br />
     *
     * NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
     * An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
     * an appointment may be reserved that is not yet assigned to a resource.<br /><br />
     *
     * NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
     * This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
     * become a booking.<br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
     *
     * To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
     * to understand your definitions of custom fields and what key and values to update. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a><br /><br />
    **/
    putConsumerV1AppointmentsIdReserve(req: operations.PutConsumerV1AppointmentsIdReserveRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1AppointmentsIdReserveResponse>;
    /**
     * putConsumerV1CustomersId - Updates a customer object.
     *
     * Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
     * Blank fields are not changed
    **/
    putConsumerV1CustomersId(req: operations.PutConsumerV1CustomersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1CustomersIdResponse>;
    /**
     * putConsumerV1CustomersSubscriptionsId - Updates a customer subscription object.
     *
     * Use this endpoint to update customer subscription information.
    **/
    putConsumerV1CustomersSubscriptionsId(req: operations.PutConsumerV1CustomersSubscriptionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutConsumerV1CustomersSubscriptionsIdResponse>;
}
export {};
