import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ResetPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetPasswordPathParams;

  @Metadata()
  queryParams: ResetPasswordQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
