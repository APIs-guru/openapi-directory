import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetParentPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;
}


export class GetParentPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetParentPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetParentPathQueryParams;

  @SpeakeasyMetadata()
  security: GetParentPathSecurity;
}


export class GetParentPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getParentPath200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
