import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationLocationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinessinformationLocationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinessinformationLocationsDeleteRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationLocationsDeletePathParams;
    queryParams: MybusinessbusinessinformationLocationsDeleteQueryParams;
}
export declare class MybusinessbusinessinformationLocationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
