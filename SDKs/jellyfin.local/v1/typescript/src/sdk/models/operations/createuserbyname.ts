import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateUserByNameRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createUserByName?: shared.CreateUserByName;

  @Metadata({ data: "request, media_type=application/json" })
  createUserByName1?: shared.CreateUserByName;

  @Metadata({ data: "request, media_type=text/json" })
  createUserByName2?: shared.CreateUserByName;
}


export class CreateUserByNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateUserByNameRequest extends SpeakeasyBase {
  @Metadata()
  request: CreateUserByNameRequests;

  @Metadata()
  security: CreateUserByNameSecurity;
}


export class CreateUserByNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userDto?: shared.UserDto;
}
