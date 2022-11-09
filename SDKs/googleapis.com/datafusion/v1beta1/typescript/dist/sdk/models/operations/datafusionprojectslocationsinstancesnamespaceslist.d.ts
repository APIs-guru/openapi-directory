import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesNamespacesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DatafusionProjectsLocationsInstancesNamespacesListViewEnum {
    NamespaceViewUnspecified = "NAMESPACE_VIEW_UNSPECIFIED",
    NamespaceViewBasic = "NAMESPACE_VIEW_BASIC",
    NamespaceViewFull = "NAMESPACE_VIEW_FULL"
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesNamespacesListPathParams;
    queryParams: DatafusionProjectsLocationsInstancesNamespacesListQueryParams;
    security: DatafusionProjectsLocationsInstancesNamespacesListSecurity;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListResponse extends SpeakeasyBase {
    contentType: string;
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
}
