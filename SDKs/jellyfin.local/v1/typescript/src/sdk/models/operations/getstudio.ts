import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStudioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetStudioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetStudioSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetStudioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudioPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStudioQueryParams;

  @SpeakeasyMetadata()
  security: GetStudioSecurity;
}


export class GetStudioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseItemDto?: shared.BaseItemDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
