import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED"
,    RawOnly = "RAW_ONLY"
,    ParsedOnly = "PARSED_ONLY"
,    Full = "FULL"
,    SchematizedOnly = "SCHEMATIZED_ONLY"
,    Basic = "BASIC"
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams;

  @Metadata()
  queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams;

  @Metadata()
  security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity;
}


export class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessagesResponse?: shared.ListMessagesResponse;

  @Metadata()
  statusCode: number;
}
