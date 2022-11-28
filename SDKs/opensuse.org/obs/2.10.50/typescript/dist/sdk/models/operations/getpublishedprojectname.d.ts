import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublishedProjectNamePathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class GetPublishedProjectNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPublishedProjectNameRequest extends SpeakeasyBase {
    pathParams: GetPublishedProjectNamePathParams;
    security: GetPublishedProjectNameSecurity;
}
export declare class GetPublishedProjectNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
