import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserRequestBody
/** 
 * Create a Member in invite state 
**/
export class CreateUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateUserRequestBody;
}


export class CreateUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class CreateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createUser200ApplicationJsonObject?: CreateUser200ApplicationJson;
}
