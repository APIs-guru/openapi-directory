import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAdministrationUserLockHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationUserLockRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  toggleUserRequest?: shared.ToggleUserRequest;

  @Metadata({ data: "request, media_type=application/json" })
  toggleUserRequest1?: shared.ToggleUserRequest;

  @Metadata({ data: "request, media_type=text/json" })
  toggleUserRequest2?: shared.ToggleUserRequest;
}


export class PutAdministrationUserLockRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAdministrationUserLockHeaders;

  @Metadata()
  request?: PutAdministrationUserLockRequests;
}


export class PutAdministrationUserLockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
