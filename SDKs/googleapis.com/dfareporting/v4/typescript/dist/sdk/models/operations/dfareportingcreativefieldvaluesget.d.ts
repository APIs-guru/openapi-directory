import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesGetPathParams extends SpeakeasyBase {
    creativeFieldId: string;
    id: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldValuesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldValuesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesGetPathParams;
    queryParams: DfareportingCreativeFieldValuesGetQueryParams;
    security: DfareportingCreativeFieldValuesGetSecurity;
}
export declare class DfareportingCreativeFieldValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldValue?: shared.CreativeFieldValue;
    statusCode: number;
}
