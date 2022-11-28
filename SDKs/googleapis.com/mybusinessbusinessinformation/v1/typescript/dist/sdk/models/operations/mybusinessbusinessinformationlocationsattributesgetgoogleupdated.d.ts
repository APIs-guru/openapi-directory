import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedPathParams;
    queryParams: MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedQueryParams;
}
export declare class MybusinessbusinessinformationLocationsAttributesGetGoogleUpdatedResponse extends SpeakeasyBase {
    attributes?: shared.Attributes;
    contentType: string;
    statusCode: number;
}
