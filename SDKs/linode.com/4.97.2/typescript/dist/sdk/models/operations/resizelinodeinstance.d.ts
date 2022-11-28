import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResizeLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class ResizeLinodeInstanceRequestBody extends SpeakeasyBase {
    allowAutoDiskResize?: boolean;
    type: string;
}
export declare class ResizeLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResizeLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResizeLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: ResizeLinodeInstancePathParams;
    request: ResizeLinodeInstanceRequestBody;
    security: ResizeLinodeInstanceSecurity;
}
export declare class ResizeLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resizeLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    resizeLinodeInstanceDefaultApplicationJsonObject?: ResizeLinodeInstanceDefaultApplicationJson;
}
