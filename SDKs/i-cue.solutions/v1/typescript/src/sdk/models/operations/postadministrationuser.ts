import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAdministrationUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationUserRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  newUserRequest?: shared.NewUserRequestInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  newUserRequest1?: shared.NewUserRequestInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  newUserRequest2?: shared.NewUserRequestInput;
}


export class PostAdministrationUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAdministrationUserHeaders;

  @SpeakeasyMetadata()
  request?: PostAdministrationUserRequestsInput;
}


export class PostAdministrationUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdministrationUser200ApplicationJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationUser200TextJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationUser200TextPlainUuidString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
