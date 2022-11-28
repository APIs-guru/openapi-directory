import { AxiosInstance } from "axios";
import { Atm } from "./atm";
import { Bca } from "./bca";
import { Branch } from "./branch";
import { Ccc } from "./ccc";
import { Pca } from "./pca";
import { Sme } from "./sme";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    atm: Atm;
    bca: Bca;
    branch: Branch;
    ccc: Ccc;
    pca: Pca;
    sme: Sme;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
