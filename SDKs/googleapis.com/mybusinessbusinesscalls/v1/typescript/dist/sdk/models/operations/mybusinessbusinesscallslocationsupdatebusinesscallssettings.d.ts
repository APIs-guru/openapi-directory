import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsPathParams;
    queryParams: MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsQueryParams;
    request?: shared.BusinessCallsSettings;
}
export declare class MybusinessbusinesscallsLocationsUpdateBusinesscallssettingsResponse extends SpeakeasyBase {
    businessCallsSettings?: shared.BusinessCallsSettings;
    contentType: string;
    statusCode: number;
}
