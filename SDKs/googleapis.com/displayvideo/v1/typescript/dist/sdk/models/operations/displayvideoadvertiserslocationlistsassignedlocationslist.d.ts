import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams extends SpeakeasyBase {
    advertiserId: string;
    locationListId: string;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams;
    queryParams: DisplayvideoAdvertisersLocationListsAssignedLocationsListQueryParams;
    security: DisplayvideoAdvertisersLocationListsAssignedLocationsListSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssignedLocationsResponse?: shared.ListAssignedLocationsResponse;
    statusCode: number;
}
