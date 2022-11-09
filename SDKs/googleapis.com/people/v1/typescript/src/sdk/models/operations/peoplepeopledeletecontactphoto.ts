import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PeoplePeopleDeleteContactPhotoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;
}

export enum PeoplePeopleDeleteContactPhotoSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


export class PeoplePeopleDeleteContactPhotoQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=personFields" })
  personFields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleDeleteContactPhotoSourcesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleDeleteContactPhotoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleDeleteContactPhotoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PeoplePeopleDeleteContactPhotoPathParams;

  @Metadata()
  queryParams: PeoplePeopleDeleteContactPhotoQueryParams;

  @Metadata()
  security: PeoplePeopleDeleteContactPhotoSecurity;
}


export class PeoplePeopleDeleteContactPhotoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteContactPhotoResponse?: shared.DeleteContactPhotoResponse;

  @Metadata()
  statusCode: number;
}
