import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/beta/chatapp-accounts"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createMessengerAccount - Create a Messenger account
    **/
    createMessengerAccount(req: operations.CreateMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessengerAccountResponse>;
    /**
     * deleteMessengerAccount - Delete a Messenger account
    **/
    deleteMessengerAccount(req: operations.DeleteMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessengerAccountResponse>;
    /**
     * getAllAccounts - Retrieve all accounts you own
    **/
    getAllAccounts(req: operations.GetAllAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllAccountsResponse>;
    /**
     * getMessengerAccount - Retrieve a Messenger account
    **/
    getMessengerAccount(req: operations.GetMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMessengerAccountResponse>;
    /**
     * getVsmAccount - Retrieve a Viber Service Message account
    **/
    getVsmAccount(req: operations.GetVsmAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetVsmAccountResponse>;
    /**
     * getWaAccount - Retrieve a Whatsapp account
    **/
    getWaAccount(req: operations.GetWaAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetWaAccountResponse>;
    /**
     * linkApplication - Link application to an account
    **/
    linkApplication(req: operations.LinkApplicationRequest, config?: AxiosRequestConfig): Promise<operations.LinkApplicationResponse>;
    /**
     * unliWithoutApplicationnkApplication - Unlink application from an account
    **/
    unliWithoutApplicationnkApplication(req: operations.UnliWithoutApplicationnkApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UnliWithoutApplicationnkApplicationResponse>;
    /**
     * updateMessengerAccount - Update a Messenger account
    **/
    updateMessengerAccount(req: operations.UpdateMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessengerAccountResponse>;
}
export {};
