import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorQueryParams extends SpeakeasyBase {
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


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorPathParams;

  @SpeakeasyMetadata()
  queryParams: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ComputeHeadCursorRequest;

  @SpeakeasyMetadata()
  security: PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorSecurity;
}


export class PubsubliteTopicStatsProjectsLocationsTopicsComputeHeadCursorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  computeHeadCursorResponse?: shared.ComputeHeadCursorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
