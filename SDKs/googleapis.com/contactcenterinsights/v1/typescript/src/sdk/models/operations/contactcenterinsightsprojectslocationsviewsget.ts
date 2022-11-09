import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactcenterinsightsProjectsLocationsViewsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ContactcenterinsightsProjectsLocationsViewsGetViewEnum {
    ConversationViewUnspecified = "CONVERSATION_VIEW_UNSPECIFIED"
,    Full = "FULL"
,    Basic = "BASIC"
}


export class ContactcenterinsightsProjectsLocationsViewsGetQueryParams extends SpeakeasyBase {
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
  view?: ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
}


export class ContactcenterinsightsProjectsLocationsViewsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContactcenterinsightsProjectsLocationsViewsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactcenterinsightsProjectsLocationsViewsGetPathParams;

  @Metadata()
  queryParams: ContactcenterinsightsProjectsLocationsViewsGetQueryParams;

  @Metadata()
  security: ContactcenterinsightsProjectsLocationsViewsGetSecurity;
}


export class ContactcenterinsightsProjectsLocationsViewsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudContactcenterinsightsV1View?: shared.GoogleCloudContactcenterinsightsV1View;

  @Metadata()
  statusCode: number;
}
