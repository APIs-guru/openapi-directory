import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerGetSessionInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerGetSessionInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerGetSessionInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerGetSessionInfoPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerGetSessionInfoQueryParams;
}


export class SessionControllerGetSessionInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionControllerGetSessionInfo200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  sessionControllerGetSessionInfo200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  sessionControllerGetSessionInfo200TextJsonString?: string;

  @SpeakeasyMetadata()
  sessionControllerGetSessionInfo200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
