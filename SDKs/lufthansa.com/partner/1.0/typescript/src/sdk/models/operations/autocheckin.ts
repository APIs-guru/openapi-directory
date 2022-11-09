import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AutoCheckInPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketnumber" })
  ticketnumber: string;
}


export class AutoCheckInQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=emailAddress" })
  emailAddress: string;
}


export class AutoCheckInHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class AutoCheckInSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class AutoCheckInRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AutoCheckInPathParams;

  @Metadata()
  queryParams: AutoCheckInQueryParams;

  @Metadata()
  headers: AutoCheckInHeaders;

  @Metadata()
  security: AutoCheckInSecurity;
}


export class AutoCheckInResponse extends SpeakeasyBase {
  @Metadata()
  autoCheckIn200ApplicationJsonString?: string;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
