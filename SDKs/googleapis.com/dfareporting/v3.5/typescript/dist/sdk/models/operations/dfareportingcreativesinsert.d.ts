import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativesInsertPathParams;
    queryParams: DfareportingCreativesInsertQueryParams;
    request?: shared.Creative;
    security: DfareportingCreativesInsertSecurity;
}
export declare class DfareportingCreativesInsertResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
