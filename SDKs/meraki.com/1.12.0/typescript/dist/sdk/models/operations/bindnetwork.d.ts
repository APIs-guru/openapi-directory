import { SpeakeasyBase } from "../../../internal/utils";
export declare class BindNetworkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class BindNetworkRequestBody extends SpeakeasyBase {
    autoBind?: boolean;
    configTemplateId: string;
}
export declare class BindNetworkRequest extends SpeakeasyBase {
    pathParams: BindNetworkPathParams;
    request: BindNetworkRequestBody;
}
export declare class BindNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bindNetwork200ApplicationJsonObject?: Map<string, any>;
}
