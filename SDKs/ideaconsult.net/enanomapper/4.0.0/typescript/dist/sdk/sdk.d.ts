import { AxiosInstance } from "axios";
import { Facets } from "./facets";
import { Search } from "./search";
import { Structures } from "./structures";
import { Studies } from "./studies";
import { Substances } from "./substances";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper", "https://api.ideaconsult.net/enanomapper"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    facets: Facets;
    search: Search;
    structures: Structures;
    studies: Studies;
    substances: Substances;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
