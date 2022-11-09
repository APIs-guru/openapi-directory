import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActivateUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ActivateUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ActivateUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivateUserPathParams;

  @Metadata()
  queryParams: ActivateUserQueryParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ActivateUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
