import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesDeletePathParams extends SpeakeasyBase {
    creativeFieldId: string;
    id: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldValuesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldValuesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesDeletePathParams;
    queryParams: DfareportingCreativeFieldValuesDeleteQueryParams;
    security: DfareportingCreativeFieldValuesDeleteSecurity;
}
export declare class DfareportingCreativeFieldValuesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
