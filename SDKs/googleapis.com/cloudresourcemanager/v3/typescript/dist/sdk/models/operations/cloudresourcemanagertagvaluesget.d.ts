import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerTagValuesGetQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesGetSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesGetSecurityOption1;
    option2?: CloudresourcemanagerTagValuesGetSecurityOption2;
}
export declare class CloudresourcemanagerTagValuesGetRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesGetPathParams;
    queryParams: CloudresourcemanagerTagValuesGetQueryParams;
    security: CloudresourcemanagerTagValuesGetSecurity;
}
export declare class CloudresourcemanagerTagValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tagValue?: shared.TagValue;
}
