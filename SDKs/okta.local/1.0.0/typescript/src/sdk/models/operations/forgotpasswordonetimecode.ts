import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForgotPasswordOneTimeCodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ForgotPasswordOneTimeCodeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ForgotPasswordOneTimeCodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForgotPasswordOneTimeCodePathParams;

  @Metadata()
  queryParams: ForgotPasswordOneTimeCodeQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ForgotPasswordOneTimeCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
