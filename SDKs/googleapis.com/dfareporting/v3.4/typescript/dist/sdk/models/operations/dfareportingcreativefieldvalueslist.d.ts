import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldValuesListPathParams extends SpeakeasyBase {
    creativeFieldId: string;
    profileId: string;
}
export declare enum DfareportingCreativeFieldValuesListSortFieldEnum {
    Id = "ID",
    Value = "VALUE"
}
export declare enum DfareportingCreativeFieldValuesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCreativeFieldValuesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
    sortField?: DfareportingCreativeFieldValuesListSortFieldEnum;
    sortOrder?: DfareportingCreativeFieldValuesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativeFieldValuesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldValuesListRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldValuesListPathParams;
    queryParams: DfareportingCreativeFieldValuesListQueryParams;
    security: DfareportingCreativeFieldValuesListSecurity;
}
export declare class DfareportingCreativeFieldValuesListResponse extends SpeakeasyBase {
    contentType: string;
    creativeFieldValuesListResponse?: shared.CreativeFieldValuesListResponse;
    statusCode: number;
}
