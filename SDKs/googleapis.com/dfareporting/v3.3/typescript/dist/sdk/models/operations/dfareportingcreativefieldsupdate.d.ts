import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativeFieldsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldsUpdatePathParams;
    queryParams: DfareportingCreativeFieldsUpdateQueryParams;
    request?: shared.CreativeField;
    security: DfareportingCreativeFieldsUpdateSecurity;
}
export declare class DfareportingCreativeFieldsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    creativeField?: shared.CreativeField;
    statusCode: number;
}
