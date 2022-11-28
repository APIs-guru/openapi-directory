import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingCreativeFieldsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingCreativeFieldsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCreativeFieldsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingCreativeFieldsListSortFieldEnum;
    sortOrder?: DfareportingCreativeFieldsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativeFieldsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldsListRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldsListPathParams;
    queryParams: DfareportingCreativeFieldsListQueryParams;
    security: DfareportingCreativeFieldsListSecurity;
}
export declare class DfareportingCreativeFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldsListResponse?: shared.CreativeFieldsListResponse;
    statusCode: number;
}
