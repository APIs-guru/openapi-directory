import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPluginsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPluginsIdRequest extends SpeakeasyBase {
    pathParams: GetPluginsIdPathParams;
}
export declare class GetPluginsIdResponse extends SpeakeasyBase {
    contentType: string;
    getPluginsId200ApplicationJsonAny?: any;
    statusCode: number;
}
