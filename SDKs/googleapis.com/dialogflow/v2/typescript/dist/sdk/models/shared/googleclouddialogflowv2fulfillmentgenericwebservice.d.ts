import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.
**/
export declare class GoogleCloudDialogflowV2FulfillmentGenericWebService extends SpeakeasyBase {
    isCloudFunction?: boolean;
    password?: string;
    requestHeaders?: Map<string, string>;
    uri?: string;
    username?: string;
}
