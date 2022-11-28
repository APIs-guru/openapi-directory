import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsUpdateAttributesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsUpdateAttributesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    attributeMask?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationLocationsUpdateAttributesRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsUpdateAttributesPathParams;
    queryParams: MybusinessbusinessinformationLocationsUpdateAttributesQueryParams;
    request?: shared.AttributesInput;
}
export declare class MybusinessbusinessinformationLocationsUpdateAttributesResponse extends SpeakeasyBase {
    attributes?: shared.Attributes;
    contentType: string;
    statusCode: number;
}
