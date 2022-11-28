import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


// UsersPartialUpdateUserAttributesInput
/** 
 * The properties of the user entity.
**/
export class UsersPartialUpdateUserAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=family_name" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=given_name" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_names" })
  middleNames?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;
}


export class UsersPartialUpdateUserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: UsersPartialUpdateUserAttributesInput;
}


export class UsersPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UsersPartialUpdateUserInput;
}


export class UsersPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
