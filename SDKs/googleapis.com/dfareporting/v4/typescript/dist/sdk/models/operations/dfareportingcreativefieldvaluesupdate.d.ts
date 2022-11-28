import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesUpdatePathParams extends SpeakeasyBase {
    creativeFieldId: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldValuesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldValuesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesUpdatePathParams;
    queryParams: DfareportingCreativeFieldValuesUpdateQueryParams;
    request?: shared.CreativeFieldValue;
    security: DfareportingCreativeFieldValuesUpdateSecurity;
}
export declare class DfareportingCreativeFieldValuesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldValue?: shared.CreativeFieldValue;
    statusCode: number;
}
