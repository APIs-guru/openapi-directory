import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOrderDocumentsListPathParams extends SpeakeasyBase {
    profileId: string;
    projectId: string;
}
export declare enum DfareportingOrderDocumentsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingOrderDocumentsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingOrderDocumentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    approved?: boolean;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderId?: string[];
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    siteId?: string[];
    sortField?: DfareportingOrderDocumentsListSortFieldEnum;
    sortOrder?: DfareportingOrderDocumentsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingOrderDocumentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOrderDocumentsListRequest extends SpeakeasyBase {
    pathParams: DfareportingOrderDocumentsListPathParams;
    queryParams: DfareportingOrderDocumentsListQueryParams;
    security: DfareportingOrderDocumentsListSecurity;
}
export declare class DfareportingOrderDocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    orderDocumentsListResponse?: shared.OrderDocumentsListResponse;
    statusCode: number;
}
