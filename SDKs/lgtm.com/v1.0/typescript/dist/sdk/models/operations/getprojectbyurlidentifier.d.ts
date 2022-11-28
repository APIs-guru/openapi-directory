import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectByUrlIdentifierPathParams extends SpeakeasyBase {
    name: string;
    org: string;
    provider: string;
}
export declare class GetProjectByUrlIdentifierSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetProjectByUrlIdentifierRequest extends SpeakeasyBase {
    pathParams: GetProjectByUrlIdentifierPathParams;
    security: GetProjectByUrlIdentifierSecurity;
}
export declare class GetProjectByUrlIdentifierResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    projectDetails?: shared.ProjectDetails;
}
