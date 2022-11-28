import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingEventTagsListEventTagTypesEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG",
    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG",
    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}
export declare enum DfareportingEventTagsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingEventTagsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingEventTagsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    adId?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    campaignId?: string;
    definitionsOnly?: boolean;
    enabled?: boolean;
    eventTagTypes?: DfareportingEventTagsListEventTagTypesEnum[];
    fields?: string;
    ids?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingEventTagsListSortFieldEnum;
    sortOrder?: DfareportingEventTagsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingEventTagsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsListRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsListPathParams;
    queryParams: DfareportingEventTagsListQueryParams;
    security: DfareportingEventTagsListSecurity;
}
export declare class DfareportingEventTagsListResponse extends SpeakeasyBase {
    contentType: string;
    eventTagsListResponse?: shared.EventTagsListResponse;
    statusCode: number;
}
