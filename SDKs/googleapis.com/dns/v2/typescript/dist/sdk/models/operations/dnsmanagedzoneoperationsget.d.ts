import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZoneOperationsGetPathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    operation: string;
    project: string;
}
export declare class DnsManagedZoneOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsManagedZoneOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsGetSecurity extends SpeakeasyBase {
    option1?: DnsManagedZoneOperationsGetSecurityOption1;
    option2?: DnsManagedZoneOperationsGetSecurityOption2;
    option3?: DnsManagedZoneOperationsGetSecurityOption3;
    option4?: DnsManagedZoneOperationsGetSecurityOption4;
}
export declare class DnsManagedZoneOperationsGetRequest extends SpeakeasyBase {
    pathParams: DnsManagedZoneOperationsGetPathParams;
    queryParams: DnsManagedZoneOperationsGetQueryParams;
    security: DnsManagedZoneOperationsGetSecurity;
}
export declare class DnsManagedZoneOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
