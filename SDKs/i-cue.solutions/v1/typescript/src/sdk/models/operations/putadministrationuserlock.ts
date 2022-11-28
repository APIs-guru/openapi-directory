import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAdministrationUserLockHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationUserLockRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  toggleUserRequest?: shared.ToggleUserRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  toggleUserRequest1?: shared.ToggleUserRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  toggleUserRequest2?: shared.ToggleUserRequest;
}


export class PutAdministrationUserLockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAdministrationUserLockHeaders;

  @SpeakeasyMetadata()
  request?: PutAdministrationUserLockRequests;
}


export class PutAdministrationUserLockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
