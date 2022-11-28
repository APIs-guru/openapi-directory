import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsOperationsCancelPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams;
    security: ContactcenterinsightsProjectsLocationsOperationsCancelSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
