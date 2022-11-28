import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsGetAttributesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsGetAttributesQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinessinformationLocationsGetAttributesRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsGetAttributesPathParams;
    queryParams: MybusinessbusinessinformationLocationsGetAttributesQueryParams;
}
export declare class MybusinessbusinessinformationLocationsGetAttributesResponse extends SpeakeasyBase {
    attributes?: shared.Attributes;
    contentType: string;
    statusCode: number;
}
