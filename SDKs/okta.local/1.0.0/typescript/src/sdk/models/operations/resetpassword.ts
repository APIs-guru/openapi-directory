import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResetPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ResetPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetPasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: ResetPasswordQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
