import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetingTemplatesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingTargetingTemplatesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingTargetingTemplatesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetingTemplatesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetingTemplatesGetPathParams;
    queryParams: DfareportingTargetingTemplatesGetQueryParams;
    security: DfareportingTargetingTemplatesGetSecurity;
}
export declare class DfareportingTargetingTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetingTemplate?: shared.TargetingTemplate;
}
