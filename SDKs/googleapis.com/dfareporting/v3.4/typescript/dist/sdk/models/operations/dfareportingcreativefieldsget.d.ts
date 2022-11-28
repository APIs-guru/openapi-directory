import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingCreativeFieldsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldsGetPathParams;
    queryParams: DfareportingCreativeFieldsGetQueryParams;
    security: DfareportingCreativeFieldsGetSecurity;
}
export declare class DfareportingCreativeFieldsGetResponse extends SpeakeasyBase {
    contentType: string;
    creativeField?: shared.CreativeField;
    statusCode: number;
}
