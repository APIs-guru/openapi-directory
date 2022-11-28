import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetingTemplatesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingTargetingTemplatesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingTargetingTemplatesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingTargetingTemplatesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
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
    sortField?: DfareportingTargetingTemplatesListSortFieldEnum;
    sortOrder?: DfareportingTargetingTemplatesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingTargetingTemplatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetingTemplatesListRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetingTemplatesListPathParams;
    queryParams: DfareportingTargetingTemplatesListQueryParams;
    security: DfareportingTargetingTemplatesListSecurity;
}
export declare class DfareportingTargetingTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetingTemplatesListResponse?: shared.TargetingTemplatesListResponse;
}
