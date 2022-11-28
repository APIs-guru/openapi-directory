import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkRequestBody extends SpeakeasyBase {
    enrollmentString?: string;
    name?: string;
    notes?: string;
    tags?: string[];
    timeZone?: string;
}
export declare class UpdateNetworkRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkPathParams;
    request?: UpdateNetworkRequestBody;
}
export declare class UpdateNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetwork200ApplicationJsonObject?: Map<string, any>;
}
