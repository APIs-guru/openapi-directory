import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
