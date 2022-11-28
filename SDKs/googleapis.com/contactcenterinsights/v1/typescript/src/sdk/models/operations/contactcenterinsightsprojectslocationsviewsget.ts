import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContactcenterinsightsProjectsLocationsViewsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ContactcenterinsightsProjectsLocationsViewsGetViewEnum {
    ConversationViewUnspecified = "CONVERSATION_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}


export class ContactcenterinsightsProjectsLocationsViewsGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ContactcenterinsightsProjectsLocationsViewsGetViewEnum;
}


export class ContactcenterinsightsProjectsLocationsViewsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContactcenterinsightsProjectsLocationsViewsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactcenterinsightsProjectsLocationsViewsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ContactcenterinsightsProjectsLocationsViewsGetQueryParams;

  @SpeakeasyMetadata()
  security: ContactcenterinsightsProjectsLocationsViewsGetSecurity;
}


export class ContactcenterinsightsProjectsLocationsViewsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudContactcenterinsightsV1View?: shared.GoogleCloudContactcenterinsightsV1View;

  @SpeakeasyMetadata()
  statusCode: number;
}
