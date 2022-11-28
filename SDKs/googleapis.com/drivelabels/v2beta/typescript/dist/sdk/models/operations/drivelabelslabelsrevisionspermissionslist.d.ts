import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsPermissionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    useAdminAccess?: boolean;
}
export declare class DrivelabelsLabelsRevisionsPermissionsListRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsPermissionsListPathParams;
    queryParams: DrivelabelsLabelsRevisionsPermissionsListQueryParams;
}
export declare class DrivelabelsLabelsRevisionsPermissionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaListLabelPermissionsResponse?: shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse;
    statusCode: number;
}
