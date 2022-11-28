import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationAccountsLocationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessbusinessinformationAccountsLocationsCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinessinformationAccountsLocationsCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationAccountsLocationsCreatePathParams;
    queryParams: MybusinessbusinessinformationAccountsLocationsCreateQueryParams;
    request?: shared.LocationInput;
}
export declare class MybusinessbusinessinformationAccountsLocationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
