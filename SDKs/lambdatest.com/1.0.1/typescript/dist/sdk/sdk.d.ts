import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.lambdatest.com/screenshots/v1"];
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
     * locations - Fetch Locations
     *
     * Fetch list of available Geolocations
    **/
    locations(req: operations.LocationsRequest, config?: AxiosRequestConfig): Promise<operations.LocationsResponse>;
    /**
     * profiles - Fetch login profiles
     *
     * Fetch login profiles
    **/
    profiles(req: operations.ProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ProfilesResponse>;
    /**
     * resolutions - Fetch all available resolution on different OS
     *
     * Fetch all available resolution on different OS
    **/
    resolutions(req: operations.ResolutionsRequest, config?: AxiosRequestConfig): Promise<operations.ResolutionsResponse>;
    /**
     * startScreenshotTest - Start Screenshot Test
     *
     * Start Screenshot Test
    **/
    startScreenshotTest(req: operations.StartScreenshotTestRequest, config?: AxiosRequestConfig): Promise<operations.StartScreenshotTestResponse>;
    /**
     * zippedScreenshots - Fetch Zipped Screenshots
     *
     * Fetch Zipped Screenshots
    **/
    zippedScreenshots(req: operations.ZippedScreenshotsRequest, config?: AxiosRequestConfig): Promise<operations.ZippedScreenshotsResponse>;
    /**
     * devices - Fetch all available device combinations.
     *
     * Fetch all os devices combinations available on lambdatest platform.
    **/
    devices(req: operations.DevicesRequest, config?: AxiosRequestConfig): Promise<operations.DevicesResponse>;
    /**
     * osBrowsers - Fetch all available os-browser combinations.
     *
     * Fetch all os browsers combinations available on lambdatest platform.
    **/
    osBrowsers(req: operations.OsBrowsersRequest, config?: AxiosRequestConfig): Promise<operations.OsBrowsersResponse>;
    /**
     * screenshots - Fetch specified screenshot details
     *
     * To fetch specified screenshot details
    **/
    screenshots(req: operations.ScreenshotsRequest, config?: AxiosRequestConfig): Promise<operations.ScreenshotsResponse>;
    /**
     * stopScreenshotsTest - Stop specified screenshot test
     *
     * Stop specified screenshot test
    **/
    stopScreenshotsTest(req: operations.StopScreenshotsTestRequest, config?: AxiosRequestConfig): Promise<operations.StopScreenshotsTestResponse>;
}
export {};
