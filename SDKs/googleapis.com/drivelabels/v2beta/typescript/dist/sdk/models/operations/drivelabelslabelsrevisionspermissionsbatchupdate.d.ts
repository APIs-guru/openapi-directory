import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams extends SpeakeasyBase {
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
}
export declare class DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsPermissionsBatchUpdatePathParams;
    queryParams: DrivelabelsLabelsRevisionsPermissionsBatchUpdateQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest;
}
export declare class DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse?: shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse;
    statusCode: number;
}
