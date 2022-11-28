import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivateUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class ActivateUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendEmail" })
  sendEmail?: string;
}


export class ActivateUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActivateUserPathParams;

  @SpeakeasyMetadata()
  queryParams: ActivateUserQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request?: Uint8Array;
}


export class ActivateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
