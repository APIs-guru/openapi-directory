import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED"
,    RawOnly = "RAW_ONLY"
,    ParsedOnly = "PARSED_ONLY"
,    Full = "FULL"
,    SchematizedOnly = "SCHEMATIZED_ONLY"
,    Basic = "BASIC"
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  batchGetMessagesResponse?: shared.BatchGetMessagesResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
