import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsmigrationArchiveInsertPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GroupsmigrationArchiveInsertQueryParams extends SpeakeasyBase {
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
export declare class GroupsmigrationArchiveInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GroupsmigrationArchiveInsertRequest extends SpeakeasyBase {
    pathParams: GroupsmigrationArchiveInsertPathParams;
    queryParams: GroupsmigrationArchiveInsertQueryParams;
    security: GroupsmigrationArchiveInsertSecurity;
}
export declare class GroupsmigrationArchiveInsertResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Groups;
    statusCode: number;
}
