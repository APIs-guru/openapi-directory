import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementLocationsAdminsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementLocationsAdminsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class MybusinessaccountmanagementLocationsAdminsPatchRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementLocationsAdminsPatchPathParams;
    queryParams: MybusinessaccountmanagementLocationsAdminsPatchQueryParams;
    request?: shared.Admin;
}
export declare class MybusinessaccountmanagementLocationsAdminsPatchResponse extends SpeakeasyBase {
    admin?: shared.Admin;
    contentType: string;
    statusCode: number;
}
