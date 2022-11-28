import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsUpdatePermissionsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    useAdminAccess?: boolean;
}
export declare class DrivelabelsLabelsRevisionsUpdatePermissionsRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsUpdatePermissionsPathParams;
    queryParams: DrivelabelsLabelsRevisionsUpdatePermissionsQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaLabelPermission;
}
export declare class DrivelabelsLabelsRevisionsUpdatePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabelPermission?: shared.GoogleAppsDriveLabelsV2betaLabelPermission;
    statusCode: number;
}
