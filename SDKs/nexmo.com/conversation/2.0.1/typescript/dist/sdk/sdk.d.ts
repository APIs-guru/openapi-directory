import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Conversation } from "./conversation";
import { Event } from "./event";
import { Leg } from "./leg";
import { Member } from "./member";
import { User } from "./user";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/v0.1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    conversation: Conversation;
    event: Event;
    leg: Leg;
    member: Member;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
