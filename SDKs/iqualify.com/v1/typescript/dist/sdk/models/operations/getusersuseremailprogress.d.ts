import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersUserEmailProgressPathParams extends SpeakeasyBase {
    userEmail: string;
}
export declare class GetUsersUserEmailProgressRequest extends SpeakeasyBase {
    pathParams: GetUsersUserEmailProgressPathParams;
}
export declare class GetUsersUserEmailProgressResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    learnerResponse?: shared.LearnerResponse;
    statusCode: number;
}
