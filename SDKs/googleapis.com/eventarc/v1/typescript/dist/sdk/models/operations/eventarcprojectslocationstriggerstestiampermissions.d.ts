import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsTriggersTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class EventarcProjectsLocationsTriggersTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsTriggersTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsTriggersTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsTriggersTestIamPermissionsPathParams;
    queryParams: EventarcProjectsLocationsTriggersTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: EventarcProjectsLocationsTriggersTestIamPermissionsSecurity;
}
export declare class EventarcProjectsLocationsTriggersTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
