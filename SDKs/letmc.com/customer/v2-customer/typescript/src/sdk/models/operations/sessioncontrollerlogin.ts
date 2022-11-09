import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerLoginPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerLoginQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class SessionControllerLoginRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerLoginPathParams;

  @Metadata()
  queryParams: SessionControllerLoginQueryParams;
}


export class SessionControllerLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sessionControllerLogin200ApplicationJsonString?: string;

  @Metadata()
  sessionControllerLogin200ApplicationXmlString?: string;

  @Metadata()
  sessionControllerLogin200TextJsonString?: string;

  @Metadata()
  sessionControllerLogin200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
