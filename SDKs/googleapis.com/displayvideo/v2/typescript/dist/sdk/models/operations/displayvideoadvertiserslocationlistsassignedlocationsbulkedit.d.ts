import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams extends SpeakeasyBase {
    advertiserId: string;
    locationListId: string;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams;
    queryParams: DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditQueryParams;
    request?: shared.BulkEditAssignedLocationsRequestInput;
    security: DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse extends SpeakeasyBase {
    bulkEditAssignedLocationsResponse?: shared.BulkEditAssignedLocationsResponse;
    contentType: string;
    statusCode: number;
}
