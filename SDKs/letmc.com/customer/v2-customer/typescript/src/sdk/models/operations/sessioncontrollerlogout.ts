import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerLogoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerLogoutQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerLogoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerLogoutPathParams;

  @Metadata()
  queryParams: SessionControllerLogoutQueryParams;
}


export class SessionControllerLogoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
