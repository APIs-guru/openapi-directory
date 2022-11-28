import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams extends SpeakeasyBase {
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


export class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWritePathParams;

  @SpeakeasyMetadata()
  queryParams: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GoogleCloudRecommendationengineV1beta1UserEvent;

  @SpeakeasyMetadata()
  security: RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteSecurity;
}


export class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudRecommendationengineV1beta1UserEvent?: shared.GoogleCloudRecommendationengineV1beta1UserEvent;

  @SpeakeasyMetadata()
  statusCode: number;
}
