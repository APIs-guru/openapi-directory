import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesTagHoldsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudresourcemanagerTagValuesTagHoldsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesTagHoldsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesTagHoldsCreateRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerTagValuesTagHoldsCreatePathParams;
    queryParams: CloudresourcemanagerTagValuesTagHoldsCreateQueryParams;
    request?: shared.TagHoldInput;
    security: CloudresourcemanagerTagValuesTagHoldsCreateSecurity;
}
export declare class CloudresourcemanagerTagValuesTagHoldsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
