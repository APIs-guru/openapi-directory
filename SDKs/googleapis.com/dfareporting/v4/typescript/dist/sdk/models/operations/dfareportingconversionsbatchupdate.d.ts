import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingConversionsBatchupdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingConversionsBatchupdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingConversionsBatchupdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingConversionsBatchupdateRequest extends SpeakeasyBase {
    pathParams: DfareportingConversionsBatchupdatePathParams;
    queryParams: DfareportingConversionsBatchupdateQueryParams;
    request?: shared.ConversionsBatchUpdateRequest;
    security: DfareportingConversionsBatchupdateSecurity;
}
export declare class DfareportingConversionsBatchupdateResponse extends SpeakeasyBase {
    contentType: string;
    conversionsBatchUpdateResponse?: shared.ConversionsBatchUpdateResponse;
    statusCode: number;
}
