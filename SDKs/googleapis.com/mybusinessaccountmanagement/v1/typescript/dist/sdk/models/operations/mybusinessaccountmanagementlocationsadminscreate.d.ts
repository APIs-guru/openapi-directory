import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementLocationsAdminsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessaccountmanagementLocationsAdminsCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementLocationsAdminsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementLocationsAdminsCreatePathParams;
    queryParams: MybusinessaccountmanagementLocationsAdminsCreateQueryParams;
    request?: shared.AdminInput;
}
export declare class MybusinessaccountmanagementLocationsAdminsCreateResponse extends SpeakeasyBase {
    admin?: shared.Admin;
    contentType: string;
    statusCode: number;
}
