import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParentPathQueryParams extends SpeakeasyBase {
    path: string;
}
export declare class GetParentPathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetParentPathRequest extends SpeakeasyBase {
    queryParams: GetParentPathQueryParams;
    security: GetParentPathSecurity;
}
export declare class GetParentPathResponse extends SpeakeasyBase {
    contentType: string;
    getParentPath200ApplicationJsonString?: string;
    statusCode: number;
}
