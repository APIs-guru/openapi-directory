import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIssuePathParams extends SpeakeasyBase {
    alertKey: string;
    projectId: number;
}
export declare class GetIssueSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetIssueRequest extends SpeakeasyBase {
    pathParams: GetIssuePathParams;
    security: GetIssueSecurity;
}
export declare class GetIssueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getIssue200ApplicationSarifPlusJsonObject?: Map<string, any>;
}
