import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerChangePasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerChangePasswordQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oldPassword" })
  oldPassword: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerChangePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerChangePasswordPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerChangePasswordQueryParams;
}


export class SessionControllerChangePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
