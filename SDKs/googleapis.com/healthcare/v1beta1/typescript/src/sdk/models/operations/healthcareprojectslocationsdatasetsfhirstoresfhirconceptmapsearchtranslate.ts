import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conceptMapVersion" })
  conceptMapVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=system" })
  system?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpBody?: shared.HttpBody;

  @Metadata()
  statusCode: number;
}
