import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForgotPasswordOneTimeCodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ForgotPasswordOneTimeCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ForgotPasswordOneTimeCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForgotPasswordOneTimeCodePathParams;

  @SpeakeasyMetadata()
  queryParams: ForgotPasswordOneTimeCodeQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ForgotPasswordOneTimeCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
