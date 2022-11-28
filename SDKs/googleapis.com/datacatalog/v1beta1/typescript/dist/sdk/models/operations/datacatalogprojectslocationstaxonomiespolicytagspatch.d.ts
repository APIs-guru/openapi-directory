import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchQueryParams;
    request?: shared.GoogleCloudDatacatalogV1beta1PolicyTagInput;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1PolicyTag?: shared.GoogleCloudDatacatalogV1beta1PolicyTag;
    statusCode: number;
}
