import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SessionControllerGetSessionInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerGetSessionInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerGetSessionInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SessionControllerGetSessionInfoPathParams;

  @Metadata()
  queryParams: SessionControllerGetSessionInfoQueryParams;
}


export class SessionControllerGetSessionInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sessionControllerGetSessionInfo200ApplicationJsonString?: string;

  @Metadata()
  sessionControllerGetSessionInfo200ApplicationXmlString?: string;

  @Metadata()
  sessionControllerGetSessionInfo200TextJsonString?: string;

  @Metadata()
  sessionControllerGetSessionInfo200TextXmlString?: string;

  @Metadata()
  statusCode: number;
}
