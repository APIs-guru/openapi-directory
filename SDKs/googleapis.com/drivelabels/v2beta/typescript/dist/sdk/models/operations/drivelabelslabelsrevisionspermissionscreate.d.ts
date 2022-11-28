import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsPermissionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsCreateQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsRevisionsPermissionsCreateRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsPermissionsCreatePathParams;
    queryParams: DrivelabelsLabelsRevisionsPermissionsCreateQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaLabelPermission;
}
export declare class DrivelabelsLabelsRevisionsPermissionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabelPermission?: shared.GoogleAppsDriveLabelsV2betaLabelPermission;
    statusCode: number;
}
