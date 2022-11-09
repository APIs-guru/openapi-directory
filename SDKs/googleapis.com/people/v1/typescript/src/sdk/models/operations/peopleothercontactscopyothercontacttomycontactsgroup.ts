import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" })
  resourceName: string;
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams extends SpeakeasyBase {
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
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurityOption2;
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams;

  @Metadata()
  queryParams: PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CopyOtherContactToMyContactsGroupRequest;

  @Metadata()
  security: PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity;
}


export class PeopleOtherContactsCopyOtherContactToMyContactsGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  person?: shared.Person;

  @Metadata()
  statusCode: number;
}
