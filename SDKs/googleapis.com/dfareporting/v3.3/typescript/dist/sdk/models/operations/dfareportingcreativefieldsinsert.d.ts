import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativeFieldsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldsInsertPathParams;
    queryParams: DfareportingCreativeFieldsInsertQueryParams;
    request?: shared.CreativeField;
    security: DfareportingCreativeFieldsInsertSecurity;
}
export declare class DfareportingCreativeFieldsInsertResponse extends SpeakeasyBase {
    contentType: string;
    creativeField?: shared.CreativeField;
    statusCode: number;
}
