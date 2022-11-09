import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAdministrationUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationUserRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  newUserRequest?: shared.NewUserRequest;

  @Metadata({ data: "request, media_type=application/json" })
  newUserRequest1?: shared.NewUserRequest;

  @Metadata({ data: "request, media_type=text/json" })
  newUserRequest2?: shared.NewUserRequest;
}


export class PostAdministrationUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAdministrationUserHeaders;

  @Metadata()
  request?: PostAdministrationUserRequests;
}


export class PostAdministrationUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdministrationUser200ApplicationJsonUuidString?: string;

  @Metadata()
  postAdministrationUser200TextJsonUuidString?: string;

  @Metadata()
  postAdministrationUser200TextPlainUuidString?: string;

  @Metadata()
  statusCode: number;
}
