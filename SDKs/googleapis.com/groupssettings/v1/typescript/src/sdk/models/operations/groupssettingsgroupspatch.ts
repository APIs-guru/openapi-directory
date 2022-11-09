import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsSettingsGroupsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupUniqueId" })
  groupUniqueId: string;
}


export class GroupsSettingsGroupsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class GroupsSettingsGroupsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class GroupsSettingsGroupsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsSettingsGroupsPatchPathParams;

  @Metadata()
  queryParams: GroupsSettingsGroupsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Groups;

  @Metadata()
  security: GroupsSettingsGroupsPatchSecurity;
}


export class GroupsSettingsGroupsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groups?: shared.Groups;

  @Metadata()
  statusCode: number;
}
