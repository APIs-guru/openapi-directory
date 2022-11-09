import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


// UsersPartialUpdateUserAttributes
/** 
 * The properties of the user entity.
**/
export class UsersPartialUpdateUserAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active: boolean;

  @Metadata({ data: "json, name=date_registered" })
  dateRegistered: Date;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=full_name" })
  fullName: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=middle_names" })
  middleNames?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}


// UsersPartialUpdateUserLinks
/** 
 * URLs to alternative representations of the user entity.
**/
export class UsersPartialUpdateUserLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=profile_image" })
  profileImage?: string;
}


// UsersPartialUpdateUserRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the user entity.
**/
export class UsersPartialUpdateUserRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=institutions" })
  institutions?: string;

  @Metadata({ data: "json, name=nodes" })
  nodes?: string;
}


export class UsersPartialUpdateUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: UsersPartialUpdateUserAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links: UsersPartialUpdateUserLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: UsersPartialUpdateUserRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class UsersPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UsersPartialUpdateUser;
}


export class UsersPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
