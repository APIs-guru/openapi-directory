import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum WebriskHashesSearchThreatTypesEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED"
,    Malware = "MALWARE"
,    SocialEngineering = "SOCIAL_ENGINEERING"
,    UnwantedSoftware = "UNWANTED_SOFTWARE"
,    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


export class WebriskHashesSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=hashPrefix" })
  hashPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=threatTypes" })
  threatTypes?: WebriskHashesSearchThreatTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class WebriskHashesSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebriskHashesSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WebriskHashesSearchQueryParams;

  @Metadata()
  security: WebriskHashesSearchSecurity;
}


export class WebriskHashesSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudWebriskV1SearchHashesResponse?: shared.GoogleCloudWebriskV1SearchHashesResponse;

  @Metadata()
  statusCode: number;
}
