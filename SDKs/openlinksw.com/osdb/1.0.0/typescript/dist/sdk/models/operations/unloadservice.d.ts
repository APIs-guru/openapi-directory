import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnloadServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare enum UnloadService200ApplicationJsonStatusEnum {
    Success = "success"
}
export declare class UnloadService200ApplicationJson extends SpeakeasyBase {
    api: string;
    method: string;
    response: string;
    status: UnloadService200ApplicationJsonStatusEnum;
}
export declare class UnloadServiceRequest extends SpeakeasyBase {
    pathParams: UnloadServicePathParams;
}
export declare class UnloadServiceResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    unloadService200ApplicationJsonObject?: UnloadService200ApplicationJson;
}
