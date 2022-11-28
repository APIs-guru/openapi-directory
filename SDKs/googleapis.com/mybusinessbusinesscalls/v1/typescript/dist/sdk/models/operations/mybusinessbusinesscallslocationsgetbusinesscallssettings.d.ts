import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinesscallsLocationsGetBusinesscallssettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessbusinesscallsLocationsGetBusinesscallssettingsQueryParams extends SpeakeasyBase {
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
export declare class MybusinessbusinesscallsLocationsGetBusinesscallssettingsRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinesscallsLocationsGetBusinesscallssettingsPathParams;
    queryParams: MybusinessbusinesscallsLocationsGetBusinesscallssettingsQueryParams;
}
export declare class MybusinessbusinesscallsLocationsGetBusinesscallssettingsResponse extends SpeakeasyBase {
    businessCallsSettings?: shared.BusinessCallsSettings;
    contentType: string;
    statusCode: number;
}
