import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenamePathParams;
    queryParams: DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameQueryParams;
    request?: shared.GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest;
    security: DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameSecurity;
}
export declare class DatacatalogProjectsLocationsTagTemplatesFieldsEnumValuesRenameResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1TagTemplateField?: shared.GoogleCloudDatacatalogV1beta1TagTemplateField;
    statusCode: number;
}
