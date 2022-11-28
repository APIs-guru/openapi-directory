import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagTemplateFieldId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTagTemplatesFieldsCreatePathParams;
    queryParams: DatacatalogProjectsLocationsTagTemplatesFieldsCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1beta1TagTemplateFieldInput;
    security: DatacatalogProjectsLocationsTagTemplatesFieldsCreateSecurity;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1TagTemplateField?: shared.GoogleCloudDatacatalogV1beta1TagTemplateField;
    statusCode: number;
}
