import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsDeletePathParams extends SpeakeasyBase {
    productId: string;
    skuId: string;
    userId: string;
}
export declare class LicensingLicenseAssignmentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class LicensingLicenseAssignmentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsDeleteRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsDeletePathParams;
    queryParams: LicensingLicenseAssignmentsDeleteQueryParams;
    security: LicensingLicenseAssignmentsDeleteSecurity;
}
export declare class LicensingLicenseAssignmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
