import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsAssociatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsAssociateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinessinformationLocationsAssociateRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsAssociatePathParams;
    queryParams: MybusinessbusinessinformationLocationsAssociateQueryParams;
    request?: shared.AssociateLocationRequest;
}
export declare class MybusinessbusinessinformationLocationsAssociateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
