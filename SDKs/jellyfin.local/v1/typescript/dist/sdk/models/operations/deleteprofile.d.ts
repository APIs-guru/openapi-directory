import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfilePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DeleteProfileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteProfileRequest extends SpeakeasyBase {
    pathParams: DeleteProfilePathParams;
    security: DeleteProfileSecurity;
}
export declare class DeleteProfileResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
