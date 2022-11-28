import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesTagHoldsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption1;
    option2?: CloudresourcemanagerTagValuesTagHoldsDeleteSecurityOption2;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesTagHoldsDeletePathParams;
    queryParams: CloudresourcemanagerTagValuesTagHoldsDeleteQueryParams;
    security: CloudresourcemanagerTagValuesTagHoldsDeleteSecurity;
}
export declare class CloudresourcemanagerTagValuesTagHoldsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
