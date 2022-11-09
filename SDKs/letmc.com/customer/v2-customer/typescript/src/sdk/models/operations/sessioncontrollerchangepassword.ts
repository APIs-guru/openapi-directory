import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerChangePasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerChangePasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newPassword" })
  newPassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oldPassword" })
  oldPassword: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerChangePasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerChangePasswordPathParams;

  @Metadata()
  queryParams: SessionControllerChangePasswordQueryParams;
}


export class SessionControllerChangePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
