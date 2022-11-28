import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.HttpBody;

  @SpeakeasyMetadata()
  security: HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchSecurity;
}


export class HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpBody?: shared.HttpBody;

  @SpeakeasyMetadata()
  statusCode: number;
}
