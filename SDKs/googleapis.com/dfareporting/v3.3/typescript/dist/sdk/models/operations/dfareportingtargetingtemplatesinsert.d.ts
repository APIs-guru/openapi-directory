import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetingTemplatesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingTargetingTemplatesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingTargetingTemplatesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetingTemplatesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetingTemplatesInsertPathParams;
    queryParams: DfareportingTargetingTemplatesInsertQueryParams;
    request?: shared.TargetingTemplate;
    security: DfareportingTargetingTemplatesInsertSecurity;
}
export declare class DfareportingTargetingTemplatesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetingTemplate?: shared.TargetingTemplate;
}
