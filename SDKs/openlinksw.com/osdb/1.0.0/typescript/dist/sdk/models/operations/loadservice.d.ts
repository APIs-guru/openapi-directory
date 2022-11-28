import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LoadServiceRequestBody extends SpeakeasyBase {
    serviceDescriptionUrl: string;
    serviceMoniker?: string;
}
export declare enum LoadService200ApplicationJsonStatusEnum {
    Success = "success"
}
export declare class LoadService200ApplicationJson extends SpeakeasyBase {
    api: string;
    method: string;
    response: string;
    status: LoadService200ApplicationJsonStatusEnum;
}
export declare class LoadServiceRequest extends SpeakeasyBase {
    request?: LoadServiceRequestBody;
}
export declare class LoadServiceResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
    loadService200ApplicationJsonObject?: LoadService200ApplicationJson;
}
