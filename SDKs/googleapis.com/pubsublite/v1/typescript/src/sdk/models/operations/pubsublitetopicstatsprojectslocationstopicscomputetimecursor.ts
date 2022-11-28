import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams extends SpeakeasyBase {
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


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorPathParams;

  @SpeakeasyMetadata()
  queryParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ComputeTimeCursorRequest;

  @SpeakeasyMetadata()
  security: PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorSecurity;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeTimeCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computeTimeCursorResponse?: shared.ComputeTimeCursorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
