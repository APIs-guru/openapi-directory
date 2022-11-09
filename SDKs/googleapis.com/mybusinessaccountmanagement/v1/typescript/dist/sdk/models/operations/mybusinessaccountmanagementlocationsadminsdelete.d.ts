import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementLocationsAdminsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementLocationsAdminsDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementLocationsAdminsDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementLocationsAdminsDeletePathParams;
    queryParams: MybusinessaccountmanagementLocationsAdminsDeleteQueryParams;
}
export declare class MybusinessaccountmanagementLocationsAdminsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
