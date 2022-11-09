import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Update the default webhook URLs associated with your account:
     *   * Callback URL for incoming SMS messages
     *   * Callback URL for delivery receipts
     *
     * Note that the URLs you provide must be valid and active. Vonage will check that they return a 200 OK response before the setting is saved.
    **/
    ChangeAccountSettings(req: operations.ChangeAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ChangeAccountSettingsResponse>;
    CreateApiSecret(req: operations.CreateApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiSecretResponse>;
    /**
     * Retrieve the current balance of your Vonage API account
    **/
    GetAccountBalance(req: operations.GetAccountBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountBalanceResponse>;
    RetrieveApiSecret(req: operations.RetrieveApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApiSecretResponse>;
    RetrieveApiSecrets(req: operations.RetrieveApiSecretsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveApiSecretsResponse>;
    RevokeApiSecret(req: operations.RevokeApiSecretRequest, config?: AxiosRequestConfig): Promise<operations.RevokeApiSecretResponse>;
    /**
     * You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled.
     * Your account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.
     * https://help.nexmo.com/hc/en-us/articles/205603248-How-do-I-set-up-automatic-payments-using-PayPal-or-credit-card- - Read more about automatic payments on the Knowledgebase
    **/
    TopUpAccountBalance(req: operations.TopUpAccountBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TopUpAccountBalanceResponse>;
}
export {};
