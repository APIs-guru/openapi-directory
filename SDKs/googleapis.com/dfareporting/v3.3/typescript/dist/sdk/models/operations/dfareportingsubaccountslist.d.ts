import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSubaccountsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingSubaccountsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingSubaccountsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingSubaccountsListQueryParams extends SpeakeasyBase {
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
    sortField?: DfareportingSubaccountsListSortFieldEnum;
    sortOrder?: DfareportingSubaccountsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingSubaccountsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSubaccountsListRequest extends SpeakeasyBase {
    pathParams: DfareportingSubaccountsListPathParams;
    queryParams: DfareportingSubaccountsListQueryParams;
    security: DfareportingSubaccountsListSecurity;
}
export declare class DfareportingSubaccountsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccountsListResponse?: shared.SubaccountsListResponse;
}
