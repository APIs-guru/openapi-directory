import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PeoplePeopleGetBatchGetSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


export class PeoplePeopleGetBatchGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=requestMask.includeField" })
  requestMaskIncludeField?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceNames" })
  resourceNames?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sources" })
  sources?: PeoplePeopleGetBatchGetSourcesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class PeoplePeopleGetBatchGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption6 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption7 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption8 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption9 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption10 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurityOption11 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeoplePeopleGetBatchGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PeoplePeopleGetBatchGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PeoplePeopleGetBatchGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PeoplePeopleGetBatchGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: PeoplePeopleGetBatchGetSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: PeoplePeopleGetBatchGetSecurityOption5;

  @Metadata({ data: "security, option=true" })
  option6?: PeoplePeopleGetBatchGetSecurityOption6;

  @Metadata({ data: "security, option=true" })
  option7?: PeoplePeopleGetBatchGetSecurityOption7;

  @Metadata({ data: "security, option=true" })
  option8?: PeoplePeopleGetBatchGetSecurityOption8;

  @Metadata({ data: "security, option=true" })
  option9?: PeoplePeopleGetBatchGetSecurityOption9;

  @Metadata({ data: "security, option=true" })
  option10?: PeoplePeopleGetBatchGetSecurityOption10;

  @Metadata({ data: "security, option=true" })
  option11?: PeoplePeopleGetBatchGetSecurityOption11;
}


export class PeoplePeopleGetBatchGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PeoplePeopleGetBatchGetQueryParams;

  @Metadata()
  security: PeoplePeopleGetBatchGetSecurity;
}


export class PeoplePeopleGetBatchGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPeopleResponse?: shared.GetPeopleResponse;

  @Metadata()
  statusCode: number;
}
