import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesInsertPathParams extends SpeakeasyBase {
    creativeFieldId: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldValuesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldValuesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesInsertPathParams;
    queryParams: DfareportingCreativeFieldValuesInsertQueryParams;
    request?: shared.CreativeFieldValue;
    security: DfareportingCreativeFieldValuesInsertSecurity;
}
export declare class DfareportingCreativeFieldValuesInsertResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldValue?: shared.CreativeFieldValue;
    statusCode: number;
}
