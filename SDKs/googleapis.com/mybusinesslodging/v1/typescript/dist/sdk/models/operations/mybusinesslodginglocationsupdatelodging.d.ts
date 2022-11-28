import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinesslodgingLocationsUpdateLodgingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinesslodgingLocationsUpdateLodgingQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinesslodgingLocationsUpdateLodgingRequest extends SpeakeasyBase {
    pathParams: MybusinesslodgingLocationsUpdateLodgingPathParams;
    queryParams: MybusinesslodgingLocationsUpdateLodgingQueryParams;
    request?: shared.LodgingInput;
}
export declare class MybusinesslodgingLocationsUpdateLodgingResponse extends SpeakeasyBase {
    contentType: string;
    lodging?: shared.Lodging;
    statusCode: number;
}
