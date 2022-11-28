import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesPatchPathParams extends SpeakeasyBase {
    creativeFieldId: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldValuesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativeFieldValuesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesPatchPathParams;
    queryParams: DfareportingCreativeFieldValuesPatchQueryParams;
    request?: shared.CreativeFieldValue;
    security: DfareportingCreativeFieldValuesPatchSecurity;
}
export declare class DfareportingCreativeFieldValuesPatchResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldValue?: shared.CreativeFieldValue;
    statusCode: number;
}
