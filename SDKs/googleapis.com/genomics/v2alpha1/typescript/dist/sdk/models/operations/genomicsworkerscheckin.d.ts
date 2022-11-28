import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GenomicsWorkersCheckInPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GenomicsWorkersCheckInQueryParams extends SpeakeasyBase {
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
export declare class GenomicsWorkersCheckInSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsWorkersCheckInSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GenomicsWorkersCheckInSecurity extends SpeakeasyBase {
    option1?: GenomicsWorkersCheckInSecurityOption1;
    option2?: GenomicsWorkersCheckInSecurityOption2;
}
export declare class GenomicsWorkersCheckInRequest extends SpeakeasyBase {
    pathParams: GenomicsWorkersCheckInPathParams;
    queryParams: GenomicsWorkersCheckInQueryParams;
    request?: shared.CheckInRequest;
    security: GenomicsWorkersCheckInSecurity;
}
export declare class GenomicsWorkersCheckInResponse extends SpeakeasyBase {
    checkInResponse?: shared.CheckInResponse;
    contentType: string;
    statusCode: number;
}
