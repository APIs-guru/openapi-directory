import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LicensingLicenseAssignmentsInsertPathParams extends SpeakeasyBase {
    productId: string;
    skuId: string;
}
export declare class LicensingLicenseAssignmentsInsertQueryParams extends SpeakeasyBase {
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
export declare class LicensingLicenseAssignmentsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class LicensingLicenseAssignmentsInsertRequest extends SpeakeasyBase {
    pathParams: LicensingLicenseAssignmentsInsertPathParams;
    queryParams: LicensingLicenseAssignmentsInsertQueryParams;
    request?: shared.LicenseAssignmentInsert;
    security: LicensingLicenseAssignmentsInsertSecurity;
}
export declare class LicensingLicenseAssignmentsInsertResponse extends SpeakeasyBase {
    contentType: string;
    licenseAssignment?: shared.LicenseAssignment;
    statusCode: number;
}
