import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsDatasourcesCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchSettingsDatasourcesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsDatasourcesCreateSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsDatasourcesCreateSecurityOption1;
    option2?: CloudsearchSettingsDatasourcesCreateSecurityOption2;
    option3?: CloudsearchSettingsDatasourcesCreateSecurityOption3;
}
export declare class CloudsearchSettingsDatasourcesCreateRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsDatasourcesCreateQueryParams;
    request?: shared.DataSource;
    security: CloudsearchSettingsDatasourcesCreateSecurity;
}
export declare class CloudsearchSettingsDatasourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
