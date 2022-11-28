import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetingTemplatesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingTargetingTemplatesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingTargetingTemplatesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetingTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetingTemplatesUpdatePathParams;
    queryParams: DfareportingTargetingTemplatesUpdateQueryParams;
    request?: shared.TargetingTemplate;
    security: DfareportingTargetingTemplatesUpdateSecurity;
}
export declare class DfareportingTargetingTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetingTemplate?: shared.TargetingTemplate;
}
