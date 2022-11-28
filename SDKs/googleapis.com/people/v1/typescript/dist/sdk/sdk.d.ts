import { AxiosInstance } from "axios";
import { ContactGroups } from "./contactgroups";
import { OtherContacts } from "./othercontacts";
import { People } from "./people";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://people.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    contactGroups: ContactGroups;
    otherContacts: OtherContacts;
    people: People;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
