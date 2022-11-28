import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsRevisionsPermissionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams extends SpeakeasyBase {
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
    writeControlRequiredRevisionId?: string;
}
export declare class DrivelabelsLabelsRevisionsPermissionsDeleteRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsRevisionsPermissionsDeletePathParams;
    queryParams: DrivelabelsLabelsRevisionsPermissionsDeleteQueryParams;
}
export declare class DrivelabelsLabelsRevisionsPermissionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
