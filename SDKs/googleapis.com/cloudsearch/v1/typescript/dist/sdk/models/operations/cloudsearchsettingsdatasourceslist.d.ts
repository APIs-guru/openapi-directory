import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsDatasourcesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchSettingsDatasourcesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesListSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsDatasourcesListSecurityOption1;
    option2?: CloudsearchSettingsDatasourcesListSecurityOption2;
    option3?: CloudsearchSettingsDatasourcesListSecurityOption3;
}
export declare class CloudsearchSettingsDatasourcesListRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsDatasourcesListQueryParams;
    security: CloudsearchSettingsDatasourcesListSecurity;
}
export declare class CloudsearchSettingsDatasourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listDataSourceResponse?: shared.ListDataSourceResponse;
    statusCode: number;
}
