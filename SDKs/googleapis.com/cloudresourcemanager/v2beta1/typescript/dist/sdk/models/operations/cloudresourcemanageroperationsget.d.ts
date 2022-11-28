import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOperationsGetSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerOperationsGetSecurityOption1;
    option2?: CloudresourcemanagerOperationsGetSecurityOption2;
}
export declare class CloudresourcemanagerOperationsGetRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerOperationsGetPathParams;
    queryParams: CloudresourcemanagerOperationsGetQueryParams;
    security: CloudresourcemanagerOperationsGetSecurity;
}
export declare class CloudresourcemanagerOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
