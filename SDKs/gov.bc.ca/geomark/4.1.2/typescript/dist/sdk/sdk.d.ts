import { AxiosInstance } from "axios";
import { BoundingBox } from "./boundingbox";
import { Create } from "./create";
import { Feature } from "./feature";
import { Info } from "./info";
import { Parts } from "./parts";
import { Point } from "./point";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apps.gov.bc.ca/pub/geomark", "https://test.apps.gov.bc.ca/pub/geomark", "https://delivery.apps.gov.bc.ca/pub/geomark"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    boundingBox: BoundingBox;
    create: Create;
    feature: Feature;
    info: Info;
    parts: Parts;
    point: Point;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
