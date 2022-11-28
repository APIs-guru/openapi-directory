import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerResetPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerResetPasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;
}


export class SessionControllerResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerResetPasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerResetPasswordQueryParams;
}


export class SessionControllerResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
