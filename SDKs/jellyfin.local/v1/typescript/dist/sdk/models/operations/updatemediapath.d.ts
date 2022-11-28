import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateMediaPathQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateMediaPathRequests extends SpeakeasyBase {
    mediaPathInfo?: shared.MediaPathInfo;
    mediaPathInfo1?: shared.MediaPathInfo;
    mediaPathInfo2?: shared.MediaPathInfo;
}
export declare class UpdateMediaPathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateMediaPathRequest extends SpeakeasyBase {
    queryParams: UpdateMediaPathQueryParams;
    request?: UpdateMediaPathRequests;
    security: UpdateMediaPathSecurity;
}
export declare class UpdateMediaPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
