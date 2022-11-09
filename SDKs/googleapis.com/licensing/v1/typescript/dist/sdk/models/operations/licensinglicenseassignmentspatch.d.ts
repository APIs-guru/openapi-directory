import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsPatchPathParams extends SpeakeasyBase {
    productId: string;
    skuId: string;
    userId: string;
}
export declare class LicensingLicenseAssignmentsPatchQueryParams extends SpeakeasyBase {
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
export declare class LicensingLicenseAssignmentsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsPatchRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsPatchPathParams;
    queryParams: LicensingLicenseAssignmentsPatchQueryParams;
    request?: shared.LicenseAssignment;
    security: LicensingLicenseAssignmentsPatchSecurity;
}
export declare class LicensingLicenseAssignmentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    licenseAssignment?: shared.LicenseAssignment;
    statusCode: number;
}
