import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    attributeDefinitionId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreatePathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateQueryParams;
    request?: shared.AttributeDefinition;
    security: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateResponse extends SpeakeasyBase {
    attributeDefinition?: shared.AttributeDefinition;
    contentType: string;
    statusCode: number;
}
