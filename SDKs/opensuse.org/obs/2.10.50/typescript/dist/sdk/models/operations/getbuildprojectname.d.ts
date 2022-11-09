import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBuildProjectNamePathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class GetBuildProjectNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetBuildProjectNameRequest extends SpeakeasyBase {
    pathParams: GetBuildProjectNamePathParams;
    security: GetBuildProjectNameSecurity;
}
export declare class GetBuildProjectNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
