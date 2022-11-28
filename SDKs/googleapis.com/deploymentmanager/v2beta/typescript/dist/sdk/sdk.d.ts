import { AxiosInstance } from "axios";
import { CompositeTypes } from "./compositetypes";
import { Deployments } from "./deployments";
import { Manifests } from "./manifests";
import { Operations } from "./operations";
import { Resources } from "./resources";
import { TypeProviders } from "./typeproviders";
import { Types } from "./types";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://deploymentmanager.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    compositeTypes: CompositeTypes;
    deployments: Deployments;
    manifests: Manifests;
    operations: Operations;
    resources: Resources;
    typeProviders: TypeProviders;
    types: Types;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
