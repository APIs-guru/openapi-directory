import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsUpdatePathParams extends SpeakeasyBase {
    productId: string;
    skuId: string;
    userId: string;
}
export declare class LicensingLicenseAssignmentsUpdateQueryParams extends SpeakeasyBase {
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
export declare class LicensingLicenseAssignmentsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsUpdateRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsUpdatePathParams;
    queryParams: LicensingLicenseAssignmentsUpdateQueryParams;
    request?: shared.LicenseAssignment;
    security: LicensingLicenseAssignmentsUpdateSecurity;
}
export declare class LicensingLicenseAssignmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    licenseAssignment?: shared.LicenseAssignment;
    statusCode: number;
}
