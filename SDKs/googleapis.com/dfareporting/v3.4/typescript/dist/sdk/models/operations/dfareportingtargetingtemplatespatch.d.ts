import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetingTemplatesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingTargetingTemplatesPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingTargetingTemplatesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetingTemplatesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetingTemplatesPatchPathParams;
    queryParams: DfareportingTargetingTemplatesPatchQueryParams;
    request?: shared.TargetingTemplate;
    security: DfareportingTargetingTemplatesPatchSecurity;
}
export declare class DfareportingTargetingTemplatesPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetingTemplate?: shared.TargetingTemplate;
}
