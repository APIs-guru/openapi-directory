import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveMediaPathQueryParams extends SpeakeasyBase {
    name?: string;
    path?: string;
    refreshLibrary?: boolean;
}
export declare class RemoveMediaPathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RemoveMediaPathRequest extends SpeakeasyBase {
    queryParams: RemoveMediaPathQueryParams;
    security: RemoveMediaPathSecurity;
}
export declare class RemoveMediaPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
