import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
    locationListId: string;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams;
    queryParams: DisplayvideoAdvertisersLocationListsAssignedLocationsCreateQueryParams;
    request?: shared.AssignedLocationInput;
    security: DisplayvideoAdvertisersLocationListsAssignedLocationsCreateSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse extends SpeakeasyBase {
    assignedLocation?: shared.AssignedLocation;
    contentType: string;
    statusCode: number;
}
