import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinesslodgingLocationsGetLodgingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinesslodgingLocationsGetLodgingQueryParams extends SpeakeasyBase {
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
export declare class MybusinesslodgingLocationsGetLodgingRequest extends SpeakeasyBase {
    pathParams: MybusinesslodgingLocationsGetLodgingPathParams;
    queryParams: MybusinesslodgingLocationsGetLodgingQueryParams;
}
export declare class MybusinesslodgingLocationsGetLodgingResponse extends SpeakeasyBase {
    contentType: string;
    lodging?: shared.Lodging;
    statusCode: number;
}
