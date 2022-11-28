import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsAssociatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsAssociateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsAssociateRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsAssociatePathParams;
    queryParams: MybusinessAccountsLocationsAssociateQueryParams;
    request?: shared.AssociateLocationRequest;
}
export declare class MybusinessAccountsLocationsAssociateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
