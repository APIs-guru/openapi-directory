import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AutoCheckInPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketnumber" })
  ticketnumber: string;
}


export class AutoCheckInQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=emailAddress" })
  emailAddress: string;
}


export class AutoCheckInHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class AutoCheckInSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class AutoCheckInRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AutoCheckInPathParams;

  @SpeakeasyMetadata()
  queryParams: AutoCheckInQueryParams;

  @SpeakeasyMetadata()
  headers: AutoCheckInHeaders;

  @SpeakeasyMetadata()
  security: AutoCheckInSecurity;
}


export class AutoCheckInResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoCheckIn200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
