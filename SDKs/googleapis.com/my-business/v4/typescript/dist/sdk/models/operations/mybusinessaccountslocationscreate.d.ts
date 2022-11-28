import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class MybusinessAccountsLocationsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsCreatePathParams;
    queryParams: MybusinessAccountsLocationsCreateQueryParams;
    request?: shared.LocationInput;
}
export declare class MybusinessAccountsLocationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
