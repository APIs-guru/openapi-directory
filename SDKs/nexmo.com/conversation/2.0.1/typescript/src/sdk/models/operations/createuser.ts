import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserRequestBody
/** 
 * Create a Member in invite state 
**/
export class CreateUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class CreateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateUserRequestBody;
}


export class CreateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createUser200ApplicationJsonObject?: CreateUser200ApplicationJson;
}
