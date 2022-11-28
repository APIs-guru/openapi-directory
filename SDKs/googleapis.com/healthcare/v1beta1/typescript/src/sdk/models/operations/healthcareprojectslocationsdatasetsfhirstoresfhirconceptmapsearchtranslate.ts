import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conceptMapVersion" })
  conceptMapVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=system" })
  system?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslatePathParams;

  @SpeakeasyMetadata()
  queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateQueryParams;

  @SpeakeasyMetadata()
  security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateSecurity;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpBody?: shared.HttpBody;

  @SpeakeasyMetadata()
  statusCode: number;
}
