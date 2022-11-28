import { AxiosInstance } from "axios";
import { Feature } from "./feature";
import { FeatureTaxonomy } from "./featuretaxonomy";
import { Name } from "./name";
import { NameAuthority } from "./nameauthority";
import { Search } from "./search";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apps.gov.bc.ca/pub/bcgnws", "https://test.apps.gov.bc.ca/pub/bcgnws", "https://delivery.apps.gov.bc.ca/pub/bcgnws"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    feature: Feature;
    featureTaxonomy: FeatureTaxonomy;
    name: Name;
    nameAuthority: NameAuthority;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
