

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
        
    
    
    
    def delete_consumer_v1_appointments_id_(self, request: operations.DeleteConsumerV1AppointmentsIDRequest) -> operations.DeleteConsumerV1AppointmentsIDResponse:
        r"""Returns an appointment object
        This end point deletes a booking. Only appointments in a \"IN\" initial status can be deleted.
        Past dated appointments cannot be cancelled.<br /><br />
        
        A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def delete_consumer_v1_customers_id_(self, request: operations.DeleteConsumerV1CustomersIDRequest) -> operations.DeleteConsumerV1CustomersIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_consumer_v1_customers_subscriptions_id_(self, request: operations.DeleteConsumerV1CustomersSubscriptionsIDRequest) -> operations.DeleteConsumerV1CustomersSubscriptionsIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_consumer_v1_appointments(self, request: operations.GetConsumerV1AppointmentsRequest) -> operations.GetConsumerV1AppointmentsResponse:
        r"""Returns a list of appointments.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
        Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
        This endpoint returns appoinments using paging. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.appointment_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_bookingfields(self, request: operations.GetConsumerV1AppointmentsBookingfieldsRequest) -> operations.GetConsumerV1AppointmentsBookingfieldsResponse:
        r"""Returns a list of appointment booking fields
        This end point returns Booking Field definitions.<br></br>
        
        Appointment booking fields are different than Customer booking fields. Appointment booking fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit.<br></br>
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/bookingfields.<br></br>
        
        Booking Fields include any custom appointment fields you wish to capture with the Booking and also
        miscellaneous appointment attributes including address information.<br></br>
        For more information see <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Appointment booking fields</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments/bookingfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsBookingfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingFieldListViewModel])
                res.booking_field_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_customfields(self, request: operations.GetConsumerV1AppointmentsCustomfieldsRequest) -> operations.GetConsumerV1AppointmentsCustomfieldsResponse:
        r"""Returns a list of appointment custom field definitions
        This end point returns your Appointment custom field definitions.<br /><br />
        
        Appointment custom fields are different than Customer custom fields. Appointment custom fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit.<br /><br />
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/customfields <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Appointment booking fields</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments/customfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsCustomfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldDefinitionListViewModel])
                res.custom_field_definition_list_view_model = out

        return res

    
    def get_consumer_v1_appointments_id_(self, request: operations.GetConsumerV1AppointmentsIDRequest) -> operations.GetConsumerV1AppointmentsIDResponse:
        r"""Returns an appointment object.
        The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
        
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AppointmentsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse:
        r"""Returns a list of available times.
        Choose your search criteria carefully. Availability is an expensive call. If you search availability for all resources
        then you should only do so for a single date. If you decide to search availability for multiple dates you should only do so
        for a specific resource by specifying the optional resourceId parameter.<br /><br />
        
        Start and End times are specified as military times e.g. 800 = 8:00am, 2230 = 10:30pm. 
        You will only see availability within the boundary of your business start and end times.<br /><br />
        
        
        dayAvailability will return day availablility for the number of days requested from the start date.<br /><br />
        
        
        firstDayAvailable only works with day availability. If set to true it will look for the first day available within the range specified
        by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month.
        Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.<br /><br />
        
        You should only specify the duration parameter if you let your customers choose the duration of the appointment. e.g. from a list.<br /><br />
        
        
        The tz parameter allows you to select a suitable timezone for the customer to book in. Your app should be timezone aware if you 
        use this option. The requested timezone is specified as an offset(plus or minus) from GMT time.<br /><br />
        
        Availabity can be complex. We provided an endpoint help you troubleshoot:
        /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable. 
        This endpoint will show you all the blocks for a given date range. Available times are created from any unblocked time periods.<br /><br />
        
        
        See more information at <a href=\"https://onsched.readme.io/docs/availability-overview\">Availability Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AvailabilityViewModel])
                res.availability_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_days(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse:
        r"""Returns a list of available days.
        This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
        
        Day level availability is a good way to restrict your choices of dates in your app and improve usability.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateDaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AvailabilityDayViewModel])
                res.availability_day_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_times(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse:
        r"""Returns a list of available times.
        <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.        
                    Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateTimesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Availability3ViewModel])
                res.availability3_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_unavailable(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse:
        r"""Returns a list of unavailable times.
        This endpoint is used to show unavailable times and provides information why the time is unavailable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateUnavailableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.unavailable_time_list_view_model = out

        return res

    
    def get_consumer_v1_availability_service_id_start_date_end_date_windows(self, request: operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsRequest) -> operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse:
        r"""Returns a list of available booking window times.
        This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
        Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1AvailabilityServiceIDStartDateEndDateWindowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WindowAvailabilityViewModel])
                res.window_availability_view_model = out

        return res

    
    def get_consumer_v1_customers(self, request: operations.GetConsumerV1CustomersRequest) -> operations.GetConsumerV1CustomersResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_list_view_model = out

        return res

    
    def get_consumer_v1_customers_bookingfields(self, request: operations.GetConsumerV1CustomersBookingfieldsRequest) -> operations.GetConsumerV1CustomersBookingfieldsResponse:
        r"""Returns a list of customer booking fields
        This end point returns Booking Field definitions.
        
        Customer booking fields are different than Appointment booking fields. Customer booking fields are
        stored with each customer. They are used when the information collected during the booking is specific
        to a particular visit.
        
        Use the field, and type to determine how to update field values
        in PUT /consumer/v1/appointments/{id}/book
        
        Customer Booking Fields include any custom customer fields you wish to capture with the Booking and also
        miscellaneous customer attributes including Company Name, Customer Demographic information and Address information.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/bookingfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersBookingfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BookingFieldListViewModel])
                res.booking_field_list_view_model = out

        return res

    
    def get_consumer_v1_customers_countries(self) -> operations.GetConsumerV1CustomersCountriesResponse:
        r"""Returns a list of country objects
        Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/countries"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CountryViewModel]])
                res.country_view_models = out

        return res

    
    def get_consumer_v1_customers_customfields(self, request: operations.GetConsumerV1CustomersCustomfieldsRequest) -> operations.GetConsumerV1CustomersCustomfieldsResponse:
        r"""Returns a list of customField objects
        This end point returns your Customer custom field definitions.
        
        Customer custom fields are different than Appointment custom fields. Appointment custom fields are
        stored with each appointment. They are used when the information collected during the booking is specific
        to a particular visit, where as Customer custom fields are stored with the customer profile. 
        
        Use the key field, and type to determine how to update field values
        in POST /consumer/v1/customers and PUT /consumer/v1/customers/{id}
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/customfields"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersCustomfieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomFieldDefinitionListViewModel])
                res.custom_field_definition_list_view_model = out

        return res

    
    def get_consumer_v1_customers_id_(self, request: operations.GetConsumerV1CustomersIDRequest) -> operations.GetConsumerV1CustomersIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def get_consumer_v1_customers_id_planlimits_service_id_resource_id_date_time_tz_(self, request: operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest) -> operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse:
        r"""Returns a list of customer booking limits.
        The result returned is list of limit rules as defined by the subscribed customer plan along with Booking Counts/Minutes
        The results indicate the remaining bookings count / minutes. Use the results in your app to determine if the customer should continue booking.
        You can enforce Limits in periods: Daily,Weekly,Monthly and for maximum total limits. Maximum total limits is based on six months prior to
        the DateTimeTz and six months after the DateTimeTz. Daily, Weekly and Monthly limits are based on the calculated period relative to the
        subscription plan start. Daily,Weekly and Monthly limits can be setup on a per interval basis e.g. to biweekly, or daily every 10 days.
        See customer plans setup in the Portal for more information.
        All parameters are required. If resourceId is not applicable for a non-resource calendar, pass zero.
        Format of the dateTimeTz field is 2018-10-30T10:00-5:00
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.plan_limit_list_view_model = out

        return res

    
    def get_consumer_v1_customers_id_subscriptions(self, request: operations.GetConsumerV1CustomersIDSubscriptionsRequest) -> operations.GetConsumerV1CustomersIDSubscriptionsResponse:
        r"""Returns a customer subscription object.
        The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/subscriptions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def get_consumer_v1_customers_plans(self, request: operations.GetConsumerV1CustomersPlansRequest) -> operations.GetConsumerV1CustomersPlansResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/plans"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersPlansResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_plan_list_view_model = out

        return res

    
    def get_consumer_v1_customers_plans_id_(self, request: operations.GetConsumerV1CustomersPlansIDRequest) -> operations.GetConsumerV1CustomersPlansIDResponse:
        r"""Returns a customer object.
        The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
        or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/plans/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersPlansIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerPlanViewModel])
                res.customer_plan_view_model = out

        return res

    
    def get_consumer_v1_customers_states(self, request: operations.GetConsumerV1CustomersStatesRequest) -> operations.GetConsumerV1CustomersStatesResponse:
        r"""Returns a list of state objects
        Returns a list of states with the associated state code and country. 
        
        Contact us if states for your countries of operation are not currently loaded.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/states"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersStatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.StateViewModel]])
                res.state_view_models = out

        return res

    
    def get_consumer_v1_customers_subscriptions(self, request: operations.GetConsumerV1CustomersSubscriptionsRequest) -> operations.GetConsumerV1CustomersSubscriptionsResponse:
        r"""Returns a list of customer subscriptions.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.customer_subscription_list_view_model = out

        return res

    
    def get_consumer_v1_customers_subscriptions_id_(self, request: operations.GetConsumerV1CustomersSubscriptionsIDRequest) -> operations.GetConsumerV1CustomersSubscriptionsIDResponse:
        r"""Returns a customer subscription object.
        The result returned is a single customer subscription object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def get_consumer_v1_locations(self, request: operations.GetConsumerV1LocationsRequest) -> operations.GetConsumerV1LocationsResponse:
        r"""Returns a list of business locations.
        Use this api end point if you have multiple business locations in your company.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        
        To leverage the search by serviceId, setup locationService's see endpoints in this controller.
        Location services allow you to exclude company scoped services for locations that do not offer them.
        You can explicitly define which services are offered or if none are defined then all services are offererd
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/locations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1LocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.location_list_view_model = out

        return res

    
    def get_consumer_v1_locations_id_(self, request: operations.GetConsumerV1LocationsIDRequest) -> operations.GetConsumerV1LocationsIDResponse:
        r"""Returns a business location object.
        The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/locations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1LocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationViewModel])
                res.location_view_model = out

        return res

    
    def get_consumer_v1_resources(self, request: operations.GetConsumerV1ResourcesRequest) -> operations.GetConsumerV1ResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/resources"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_consumer_v1_resources_id_(self, request: operations.GetConsumerV1ResourcesIDRequest) -> operations.GetConsumerV1ResourcesIDResponse:
        r"""Returns a resource object.
        The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/resources/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResourceViewModel])
                res.resource_view_model = out

        return res

    
    def get_consumer_v1_resources_id_services(self, request: operations.GetConsumerV1ResourcesIDServicesRequest) -> operations.GetConsumerV1ResourcesIDServicesResponse:
        r"""Returns a list of resource services.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
        default all services can be booked for the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/resources/{id}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ResourcesIDServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_service_list_view_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_consumer_v1_servicegroups(self, request: operations.GetConsumerV1ServicegroupsRequest) -> operations.GetConsumerV1ServicegroupsResponse:
        r"""Returns a list of service groups.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/servicegroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicegroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_group_list_view_model = out

        return res

    
    def get_consumer_v1_servicegroups_id_(self, request: operations.GetConsumerV1ServicegroupsIDRequest) -> operations.GetConsumerV1ServicegroupsIDResponse:
        r"""Returns a serviceGroup object.
        The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using 
        the GET consumer/v1/servicegroups end point,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/servicegroups/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicegroupsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceGroupViewModel])
                res.service_group_view_model = out

        return res

    
    def get_consumer_v1_services(self, request: operations.GetConsumerV1ServicesRequest) -> operations.GetConsumerV1ServicesResponse:
        r"""Returns a list of services.
        Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried. 
        The results are returned in pages. Use the offset and limit parameters to control the page start and size.
        Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/services"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.service_list_view_model = out

        return res

    
    def get_consumer_v1_services_allocations_id_(self, request: operations.GetConsumerV1ServicesAllocationsIDRequest) -> operations.GetConsumerV1ServicesAllocationsIDResponse:
        r"""Get a service allocation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/allocations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesAllocationsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceAllocationViewModel])
                res.service_allocation_view_model = out

        return res

    
    def get_consumer_v1_services_id_(self, request: operations.GetConsumerV1ServicesIDRequest) -> operations.GetConsumerV1ServicesIDResponse:
        r"""Returns a service object.
        The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
        or the GET consumer/v1/appointments end point.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceViewModel])
                res.service_view_model = out

        return res

    
    def get_consumer_v1_services_id_allocations(self, request: operations.GetConsumerV1ServicesIDAllocationsRequest) -> operations.GetConsumerV1ServicesIDAllocationsResponse:
        r"""Returns a list of service allocations.
        This endpoint is used primarily for event booking. When you create service type events, you allocation specific occurrences of the event 
        against the service. 
        
        You can retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service
        pass in the service id.
        
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}/allocations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDAllocationsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_consumer_v1_services_id_resources(self, request: operations.GetConsumerV1ServicesIDResourcesRequest) -> operations.GetConsumerV1ServicesIDResourcesResponse:
        r"""Returns a list of resources.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/services/{id}/resources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1ServicesIDResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resource_list_view_model = out

        return res

    
    def get_consumer_v1_settings(self, request: operations.GetConsumerV1SettingsRequest) -> operations.GetConsumerV1SettingsResponse:
        r"""Returns a list of customers.
        The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
        Use the other query parameters to optionally filter the results list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/settings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsumerV1SettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnlineSettingsViewModel])
                res.online_settings_view_model = out

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

    
    def post_consumer_v1_appointments(self, request: operations.PostConsumerV1AppointmentsRequest) -> operations.PostConsumerV1AppointmentsResponse:
        r"""Returns an appointment object
        <p>This end point creates a new appointment in an Initial \"IN\" status. The exception is if completeBooking parameter set.</p>
        <br />
        <p>If you supply a valid customerId in the body, then the POST will create either a booking or reservation using the customer data.</p>
        <br />
        <p> A valid serviceId is required. Use GET consumer/v1/services to retrieve a list of your services.</p>
        <br />
        <p> A valid resourceId is required if your calendar is a resource based calendar and you are booking single resource appointments. </p>
        <br />
        <p> Use consumer/v1/resources to retrieve a list of your resources or use a resourceId returned from the /availability endpoints. </p>
        <br />
        <p> The resourceIds parameter is required for multi-resource appointments. Pass in comma separated valid resourceIds. This is beta until we update the notifications.</p>
        <br />
        <p> The customerIds parameter is required for multi-customer appointments. Pass in comma separated valid customerIds. This is beta until we update the notifications.</p>
        <br />
        <p> The locationId is optional. If the locationId is not passed, the system will default to the primary company location. </p>
        <br />
        <p> ServiceId provided must be valid for the location being searched. A valid serviceId is one that is scoped to 
                     Primary Company Location or is associated with that business LocationId</p>
        <br />
        <p> The customerId is optional. If supplied you can use the completeBooking option and skip the PUT /book step. </p>
        <br />
        <p> The completeBooking option provides a mechanism for immediate booking with a POST. Applies if you have enough customer information
                     to complete the booking. Either supply email and name or customerId with required information.
                     Normally, completeBooking is for the BK or RS status, however IN is included to support payment flows.</p>
        <br />
        <p> The email, name and phone fields are only used with the completeBooking option. As with customerId you can
                     skip the PUT /book step. This endpoint completes the booking, and sends notifications.</p>
        <br />
        <p> A bookingWindowId is required if you are booking appointments into a defined booking window on the service.</p>
        <br />
        <p> BookedBy is an optional parameter. If it is not supplied the email address of the booked appointment is used or the ip address if no email address is
                     used in the /appointment/book endpoint. Booked by is used in the Appointment Audit trail which can be viewed in the Admin Portal.</p>
        <br />
        <p> Location is optional. This is a string representing the location of the actual appointment, not to be confused with a Business Location.</p>
        <br />
        <p>Timezone name is optional. The Timezone name is in Iana format e.g. America/New_York. This is the timezone where the appointment was booked. Populating
                     this information can help later in situations where appointments are booked before a Daylight Savings change.</p>
        <br />
        <p>StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00</p>
        <br />
        <p>TravelTimeMins and TravelAppointmentId are optional. These are important if you factor in Travel Time for resources to move between appointments.</p>
        <br />
        <p>This information is returned from the availability/times endpoint. <br /><br />
                     See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a></p>
        <br />
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/appointments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1AppointmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentInitialViewModel])
                res.appointment_initial_view_model = out

        return res

    
    def post_consumer_v1_customers(self, request: operations.PostConsumerV1CustomersRequest) -> operations.PostConsumerV1CustomersResponse:
        r"""Creates a new customer object.
        Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
        Email Address and a lastname are required for creating a new customer.
        Type 0 = Person, Type 1 = Business
        For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/consumer/v1/customers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1CustomersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerViewModel])
                res.customer_view_model = out

        return res

    
    def post_consumer_v1_customers_id_subscriptions(self, request: operations.PostConsumerV1CustomersIDSubscriptionsRequest) -> operations.PostConsumerV1CustomersIDSubscriptionsResponse:
        r"""Creates a new customer subscription object.
        Use this endpoint to create a new customer subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConsumerV1CustomersIDSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CustomerSubscriptionViewModel])
                res.customer_subscription_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_book(self, request: operations.PutConsumerV1AppointmentsIDBookRequest) -> operations.PutConsumerV1AppointmentsIDBookResponse:
        r"""Returns an appointment object
        This end point completes a new booking. Only appointments in the \"IN\" initial status can be booked.
        by saving all the relevant details of the booking. <br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.  <br /><br />
        
        To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.  <br /><br />
        to understand your definitions of custom fields and what key and values to update. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a> and 
        <a href=\"https://onsched.readme.io/docs/custom-booking-fields\">Custom Booking Fields</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/book", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_cancel(self, request: operations.PutConsumerV1AppointmentsIDCancelRequest) -> operations.PutConsumerV1AppointmentsIDCancelResponse:
        r"""Returns an appointment object
        This end point cancels a booking or reservation. Only appointments in a \"BK\" booked, or \"RS\" reserved status can be cancelled.
        Past dated appointments cannot be cancelled. <br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_confirm(self, request: operations.PutConsumerV1AppointmentsIDConfirmRequest) -> operations.PutConsumerV1AppointmentsIDConfirmResponse:
        r"""Set the Appointment Confirm property to true or false
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/confirm", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_appointments_id_noshow(self, request: operations.PutConsumerV1AppointmentsIDNoshowRequest) -> operations.PutConsumerV1AppointmentsIDNoshowResponse:
        r"""For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/noshow", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDNoshowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_appointments_id_reschedule(self, request: operations.PutConsumerV1AppointmentsIDRescheduleRequest) -> operations.PutConsumerV1AppointmentsIDRescheduleResponse:
        r"""Returns an appointment object
        This end point reschedules a booking. Only appointments in a \"BK\" booked status can be rescheduled.
        Past dated appointments cannot be cancelled.<br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from GET /consumer/v1/appointments.<br /><br />
        
        StartDateTime and EndDateTime are required. Use the ISO 8601 format for DateTime Timezone. e.g. 2016-10-30T09:00:00-5:00<br /><br />
        
        The serviceId is optional. If you want your users to change the service on a reschedule, include the new serviceId. 
        The new serviceId's StartDateTime and EndDateTime must match your service's duration.<br /><br />
        
        Use the GET /consumer/v1/availability/{id}/reschedule endpoint to display a list of available times
        for the end user to choose from to reschedule the original appointment.<br /><br />
        
        You cannot reschedule an appointment to a different location. You can cancel and reschedule to a different location.
        
        For more information see <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointment Overview</a>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/reschedule", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDRescheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AppointmentViewModel])
                res.appointment_view_model = out

        return res

    
    def put_consumer_v1_appointments_id_reserve(self, request: operations.PutConsumerV1AppointmentsIDReserveRequest) -> operations.PutConsumerV1AppointmentsIDReserveResponse:
        r"""Returns an appointment object
        This end point completes a new reservation. Only appointments in the \"IN\" initial status can be booked.
        by saving all the relevant details of the booking.<br /><br />
        
        NOTE - appointment reservations are different than appointment bookings. Reservations are a two step booking process.
        An appointment is reserved but may not be completed as a booking until other business conditions have been met. For example
        an appointment may be reserved that is not yet assigned to a resource.<br /><br />
        
        NOTE 2 - this endpoint is new as of April 21, 2019. OnSched will be adding a new Email template for appointment reservations expected by the end of April.
        This will allow you to notify your customer of a reservation versus a booking and customize if required to indicate what conditions will the reservation
        become a booking.<br /><br />
        
        A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments.<br /><br />
        
        To update appointment custom field values, use the GET /consumer/v1/appointments/customfields information.
        to understand your definitions of custom fields and what key and values to update. <br /><br />
        See more information at <a href=\"https://onsched.readme.io/docs/appointments-overview\">Appointments Overview</a><br /><br />
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/appointments/{id}/reserve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1AppointmentsIDReserveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_customers_id_(self, request: operations.PutConsumerV1CustomersIDRequest) -> operations.PutConsumerV1CustomersIDResponse:
        r"""Updates a customer object.
        Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
        Blank fields are not changed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1CustomersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_consumer_v1_customers_subscriptions_id_(self, request: operations.PutConsumerV1CustomersSubscriptionsIDRequest) -> operations.PutConsumerV1CustomersSubscriptionsIDResponse:
        r"""Updates a customer subscription object.
        Use this endpoint to update customer subscription information.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/consumer/v1/customers/subscriptions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutConsumerV1CustomersSubscriptionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    