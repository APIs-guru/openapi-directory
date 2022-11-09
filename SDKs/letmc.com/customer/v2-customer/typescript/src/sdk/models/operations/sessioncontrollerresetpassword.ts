import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerResetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerResetPasswordQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;
}


export class SessionControllerResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerResetPasswordPathParams;

  @Metadata()
  queryParams: SessionControllerResetPasswordQueryParams;
}


export class SessionControllerResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
