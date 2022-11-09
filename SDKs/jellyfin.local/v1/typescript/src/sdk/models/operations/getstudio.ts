import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStudioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetStudioSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetStudioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudioPathParams;

  @Metadata()
  queryParams: GetStudioQueryParams;

  @Metadata()
  security: GetStudioSecurity;
}


export class GetStudioResponse extends SpeakeasyBase {
  @Metadata()
  baseItemDto?: shared.BaseItemDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
