import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKernelsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetKernels200ApplicationJson extends SpeakeasyBase {
    data?: shared.Kernel[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetKernelsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetKernelsRequest extends SpeakeasyBase {
    queryParams: GetKernelsQueryParams;
}
export declare class GetKernelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getKernels200ApplicationJsonObject?: GetKernels200ApplicationJson;
    getKernelsDefaultApplicationJsonObject?: GetKernelsDefaultApplicationJson;
}
