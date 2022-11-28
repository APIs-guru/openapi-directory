import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams extends SpeakeasyBase {
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


export class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest;

  @SpeakeasyMetadata()
  security: RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration?: shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;

  @SpeakeasyMetadata()
  statusCode: number;
}
