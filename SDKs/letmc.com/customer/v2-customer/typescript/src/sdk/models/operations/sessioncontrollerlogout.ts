import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SessionControllerLogoutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class SessionControllerLogoutQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class SessionControllerLogoutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SessionControllerLogoutPathParams;

  @SpeakeasyMetadata()
  queryParams: SessionControllerLogoutQueryParams;
}


export class SessionControllerLogoutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
