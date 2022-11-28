import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AttendanceSubscriberStateChanges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate - Record
     *
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using HubSpot contact ids.
    **/
    postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate(req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse>;
    /**
     * postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail - Record
     *
     * Record a subscription state between multiple HubSpot contacts and a marketing event, using contact email addresses. If contact is not present it will be automatically created. If you set params
    **/
    postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail(req: operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse>;
}
