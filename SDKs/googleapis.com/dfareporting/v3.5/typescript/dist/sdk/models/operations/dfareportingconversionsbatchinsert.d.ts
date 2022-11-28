import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingConversionsBatchinsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingConversionsBatchinsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingConversionsBatchinsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingConversionsBatchinsertRequest extends SpeakeasyBase {
    pathParams: DfareportingConversionsBatchinsertPathParams;
    queryParams: DfareportingConversionsBatchinsertQueryParams;
    request?: shared.ConversionsBatchInsertRequest;
    security: DfareportingConversionsBatchinsertSecurity;
}
export declare class DfareportingConversionsBatchinsertResponse extends SpeakeasyBase {
    contentType: string;
    conversionsBatchInsertResponse?: shared.ConversionsBatchInsertResponse;
    statusCode: number;
}
