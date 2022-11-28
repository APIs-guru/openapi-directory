import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTagTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTagTemplatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagTemplateId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTagTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTagTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTagTemplatesCreatePathParams;
    queryParams: DatacatalogProjectsLocationsTagTemplatesCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1TagTemplateInput;
    security: DatacatalogProjectsLocationsTagTemplatesCreateSecurity;
}
export declare class DatacatalogProjectsLocationsTagTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1TagTemplate?: shared.GoogleCloudDatacatalogV1TagTemplate;
    statusCode: number;
}
