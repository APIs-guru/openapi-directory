import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCoursesContentIdActivationsPathParams extends SpeakeasyBase {
    contentId: string;
}
export declare class GetCoursesContentIdActivationsRequest extends SpeakeasyBase {
    pathParams: GetCoursesContentIdActivationsPathParams;
}
export declare class GetCoursesContentIdActivationsResponse extends SpeakeasyBase {
    activationResponse?: shared.ActivationResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
