import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateUserByNameRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createUserByName?: shared.CreateUserByName;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createUserByName1?: shared.CreateUserByName;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createUserByName2?: shared.CreateUserByName;
}


export class CreateUserByNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateUserByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: CreateUserByNameRequests;

  @SpeakeasyMetadata()
  security: CreateUserByNameSecurity;
}


export class CreateUserByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userDto?: shared.UserDto;
}
