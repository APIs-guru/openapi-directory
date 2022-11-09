import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class YoutubeAnalyticsReportsQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dimensions" })
  dimensions?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeHistoricalChannelData" })
  includeHistoricalChannelData?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metrics" })
  metrics?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class YoutubeAnalyticsReportsQuerySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeAnalyticsReportsQuerySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeAnalyticsReportsQuerySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeAnalyticsReportsQuerySecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeAnalyticsReportsQuerySecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class YoutubeAnalyticsReportsQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: YoutubeAnalyticsReportsQuerySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: YoutubeAnalyticsReportsQuerySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: YoutubeAnalyticsReportsQuerySecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: YoutubeAnalyticsReportsQuerySecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: YoutubeAnalyticsReportsQuerySecurityOption5;
}


export class YoutubeAnalyticsReportsQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: YoutubeAnalyticsReportsQueryQueryParams;

  @Metadata()
  security: YoutubeAnalyticsReportsQuerySecurity;
}


export class YoutubeAnalyticsReportsQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  queryResponse?: shared.QueryResponse;

  @Metadata()
  statusCode: number;
}
