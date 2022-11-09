import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesUpdateMetadataItemsRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesUpdateMetadataItemsPathParams;
    queryParams: NotebooksProjectsLocationsInstancesUpdateMetadataItemsQueryParams;
    request?: shared.UpdateInstanceMetadataItemsRequest;
    security: NotebooksProjectsLocationsInstancesUpdateMetadataItemsSecurity;
}
export declare class NotebooksProjectsLocationsInstancesUpdateMetadataItemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateInstanceMetadataItemsResponse?: shared.UpdateInstanceMetadataItemsResponse;
}
