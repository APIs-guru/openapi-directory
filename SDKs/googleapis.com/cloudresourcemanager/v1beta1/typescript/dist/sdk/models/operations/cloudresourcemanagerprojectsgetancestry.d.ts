import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsGetAncestryPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudresourcemanagerProjectsGetAncestryQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsGetAncestrySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetAncestrySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetAncestrySecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetAncestrySecurityOption1;
    option2?: CloudresourcemanagerProjectsGetAncestrySecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetAncestryRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsGetAncestryPathParams;
    queryParams: CloudresourcemanagerProjectsGetAncestryQueryParams;
    request?: Map<string, any>;
    security: CloudresourcemanagerProjectsGetAncestrySecurity;
}
export declare class CloudresourcemanagerProjectsGetAncestryResponse extends SpeakeasyBase {
    contentType: string;
    getAncestryResponse?: shared.GetAncestryResponse;
    statusCode: number;
}
