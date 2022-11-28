import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AgentUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * homegraphAgentUsersDelete - Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.
    **/
    homegraphAgentUsersDelete(req: operations.HomegraphAgentUsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.HomegraphAgentUsersDeleteResponse>;
}
