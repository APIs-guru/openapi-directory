import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsPermissionsBatchDeletePathParams;
    queryParams: DrivelabelsLabelsRevisionsPermissionsBatchDeleteQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest;
}
export declare class DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
