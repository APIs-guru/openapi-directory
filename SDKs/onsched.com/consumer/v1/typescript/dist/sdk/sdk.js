var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
export var ServerList = [
    "https://onsched.com",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
    };
}
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
    }
    /**
     * deleteConsumerV1AppointmentsId - Returns an appointment object
     *
     * This end point deletes a booking. Only appointments in a "IN" initial status can be deleted.
     * Past dated appointments cannot be cancelled.<br /><br />
     *
     * A valid appointment id is required. You can use the appointmentId returned from GET /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    SDK.prototype.deleteConsumerV1AppointmentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConsumerV1AppointmentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteConsumerV1CustomersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConsumerV1CustomersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.deleteConsumerV1CustomersSubscriptionsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteConsumerV1CustomersSubscriptionsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/subscriptions/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "delete" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Appointments - Returns a list of appointments.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.<br /><br />
     * Use the other query parameters to optionally filter the list by using the query parameters. <br /><br />
     * This endpoint returns appoinments using paging. <br /><br />
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    SDK.prototype.getConsumerV1Appointments = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1AppointmentsBookingfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsBookingfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments/bookingfields";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bookingFieldListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1AppointmentsCustomfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsCustomfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments/customfields";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customFieldDefinitionListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1AppointmentsId - Returns an appointment object.
     *
     * The result returned is a single appointment object. A valid id is required to find the appointment. <br /><br />
     *
     * See more information at <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a>
    **/
    SDK.prototype.getConsumerV1AppointmentsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AppointmentsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.availabilityViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateDays - Returns a list of available days.
     *
     * This end point is used to show day level availability. For example if the business is closed, or there is a public holiday.
     *
     * Day level availability is a good way to restrict your choices of dates in your app and improve usability.
    **/
    SDK.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateDays = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.availabilityDayViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateTimes - Returns a list of available times.
     *
     * <b>Deprecation Notice</b> : This endpoint is no longer being maintained and will be deprecated in a future release.
     *             Use the /consumer/v1/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    SDK.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateTimes = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/times", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.availability3ViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable - Returns a list of unavailable times.
     *
     * This endpoint is used to show unavailable times and provides information why the time is unavailable.
    **/
    SDK.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailable = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.unavailableTimeListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1AvailabilityServiceIdStartDateEndDateWindows - Returns a list of available booking window times.
     *
     * This end point may be removed in the next release. It is used for server based availability from UnavailableTimes.
     * Use the v1/consumer/availability{serviceId}/{startDate}/{endDate} endpoint instead.
    **/
    SDK.prototype.getConsumerV1AvailabilityServiceIdStartDateEndDateWindows = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/availability/{serviceId}/{startDate}/{endDate}/windows", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.windowAvailabilityViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Customers - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1Customers = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1CustomersBookingfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersBookingfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/bookingfields";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.bookingFieldListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersCountries - Returns a list of country objects
     *
     * Returns a list of countries with the associated country code. Country codes are based on the 2 character ANSI standard.
    **/
    SDK.prototype.getConsumerV1CustomersCountries = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/countries";
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.countryViewModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1CustomersCustomfields = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersCustomfieldsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/customfields";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customFieldDefinitionListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    SDK.prototype.getConsumerV1CustomersId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTz = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersIdPlanlimitsServiceIdResourceIdDateTimeTzRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}/planlimits/{serviceId}/{resourceId}/{dateTimeTz}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.planLimitListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersIdSubscriptions - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object. A customer can only be subsribed to a single Customer Plan
    **/
    SDK.prototype.getConsumerV1CustomersIdSubscriptions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersIdSubscriptionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}/subscriptions", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerSubscriptionViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersPlans - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1CustomersPlans = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersPlansRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/plans";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerPlanListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersPlansId - Returns a customer object.
     *
     * The result returned is a single customer object. An id is required to find the customer. Find customer id's using either the GET consumer/v1/customers end point,
     * or the GET consumer/v1/appointments end point. A customer object is automatically created with the first booking if it doesn't already exist.
    **/
    SDK.prototype.getConsumerV1CustomersPlansId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersPlansIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/plans/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerPlanViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersStates - Returns a list of state objects
     *
     * Returns a list of states with the associated state code and country.
     *
     * Contact us if states for your countries of operation are not currently loaded.
    **/
    SDK.prototype.getConsumerV1CustomersStates = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersStatesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/states";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.stateViewModels = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersSubscriptions - Returns a list of customer subscriptions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1CustomersSubscriptions = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersSubscriptionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers/subscriptions";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerSubscriptionListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1CustomersSubscriptionsId - Returns a customer subscription object.
     *
     * The result returned is a single customer subscription object.
    **/
    SDK.prototype.getConsumerV1CustomersSubscriptionsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1CustomersSubscriptionsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/subscriptions/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerSubscriptionViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1Locations = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1LocationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/locations";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.locationListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    SDK.prototype.getConsumerV1LocationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1LocationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/locations/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.locationViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Resources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1Resources = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ResourcesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/resources";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.resourceListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ResourcesId - Returns a resource object.
     *
     * The result returned is a single resource object. An id is required to find the resource. Find customer id's using either the GET consumer/v1/resources end point,
     * or the GET consumer/v1/appointments end point.
    **/
    SDK.prototype.getConsumerV1ResourcesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ResourcesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/resources/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.resourceViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ResourcesIdServices - Returns a list of resource services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
     * Resource services are used to explicitly define the services that can be booked for a resource. If no resource services are defined then by
     * default all services can be booked for the resource.
    **/
    SDK.prototype.getConsumerV1ResourcesIdServices = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ResourcesIdServicesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/resources/{id}/services", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.resourceServiceListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Servicegroups - Returns a list of service groups.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1Servicegroups = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicegroupsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/servicegroups";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceGroupListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ServicegroupsId - Returns a serviceGroup object.
     *
     * The result returned is a single serviceGroup object. An id is required to find the serviceGroup. Find serviceGroup id's using
     * the GET consumer/v1/servicegroups end point,
    **/
    SDK.prototype.getConsumerV1ServicegroupsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicegroupsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/servicegroups/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceGroupViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Services - Returns a list of services.
     *
     * Use this endpoint to get services available at your business location and/or company. If no locationId is provided the primary company will be queried.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size.
     * Default offset is <b>0</b>, and limit is <b>20</b>. Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1Services = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/services";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ServicesAllocationsId - Get a service allocation
    **/
    SDK.prototype.getConsumerV1ServicesAllocationsId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicesAllocationsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/services/allocations/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceAllocationViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ServicesId - Returns a service object.
     *
     * The result returned is a single service object. An id is required to find the service. Find service id's using either the GET consumer/v1/service end point,
     * or the GET consumer/v1/appointments end point.
    **/
    SDK.prototype.getConsumerV1ServicesId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicesIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/services/{id}", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.getConsumerV1ServicesIdAllocations = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicesIdAllocationsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/services/{id}/allocations", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.serviceAllocationListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 401:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1ServicesIdResources - Returns a list of resources.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1ServicesIdResources = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1ServicesIdResourcesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/services/{id}/resources", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.resourceListViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * getConsumerV1Settings - Returns a list of customers.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    SDK.prototype.getConsumerV1Settings = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetConsumerV1SettingsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/settings";
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.onlineSettingsViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    SDK.prototype.getPlanId = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetPlanIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/{planId}", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.postConsumerV1Appointments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConsumerV1AppointmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/appointments";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentInitialViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postConsumerV1Customers - Creates a new customer object.
     *
     * Use this endpoint to create a new customer. If not specified the business location id defaults to the first location in the company.
     * Email Address and a lastname are required for creating a new customer.
     * Type 0 = Person, Type 1 = Business
     * For type 0, the firstname and lastname fields are used. For type 1, the Name field is used and the name field is also used to populate the lastname.
    **/
    SDK.prototype.postConsumerV1Customers = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConsumerV1CustomersRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/consumer/v1/customers";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * postConsumerV1CustomersIdSubscriptions - Creates a new customer subscription object.
     *
     * Use this endpoint to create a new customer subscription.
    **/
    SDK.prototype.postConsumerV1CustomersIdSubscriptions = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostConsumerV1CustomersIdSubscriptionsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}/subscriptions", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.customerSubscriptionViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.putConsumerV1AppointmentsIdBook = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdBookRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/book", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putConsumerV1AppointmentsIdCancel - Returns an appointment object
     *
     * This end point cancels a booking or reservation. Only appointments in a "BK" booked, or "RS" reserved status can be cancelled.
     * Past dated appointments cannot be cancelled. <br /><br />
     *
     * A valid appointment id is required. Use the appointmentId returned from POST /consumer/v1/appointments. <br /><br />
     * For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    SDK.prototype.putConsumerV1AppointmentsIdCancel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdCancelRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/cancel", req.pathParams);
        var client = this._securityClient;
        return client
            .request(__assign({ url: url, method: "put" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putConsumerV1AppointmentsIdConfirm - Set the Appointment Confirm property to true or false
    **/
    SDK.prototype.putConsumerV1AppointmentsIdConfirm = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdConfirmRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/confirm", req.pathParams);
        var client = this._securityClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "put" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putConsumerV1AppointmentsIdNoshow - For more information see <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a>
    **/
    SDK.prototype.putConsumerV1AppointmentsIdNoshow = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdNoshowRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/noshow", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.putConsumerV1AppointmentsIdReschedule = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdRescheduleRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/reschedule", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.appointmentViewModel = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    SDK.prototype.putConsumerV1AppointmentsIdReserve = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1AppointmentsIdReserveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/appointments/{id}/reserve", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putConsumerV1CustomersId - Updates a customer object.
     *
     * Use this endpoint to update customer information. If not specified the business location id defaults to the first location in the company.
     * Blank fields are not changed
    **/
    SDK.prototype.putConsumerV1CustomersId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1CustomersIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * putConsumerV1CustomersSubscriptionsId - Updates a customer subscription object.
     *
     * Use this endpoint to update customer subscription information.
    **/
    SDK.prototype.putConsumerV1CustomersSubscriptionsId = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutConsumerV1CustomersSubscriptionsIdRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/consumer/v1/customers/subscriptions/{id}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "put", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
