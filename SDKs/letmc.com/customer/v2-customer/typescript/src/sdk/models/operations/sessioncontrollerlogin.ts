import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerLoginPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerLoginQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class SessionControllerLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerLoginPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerLoginQueryParams;
}


export class SessionControllerLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200ApplicationXmlString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200TextJsonString?: string;

  @SpeakeasyMetadata()
  sessionControllerLogin200TextXmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
