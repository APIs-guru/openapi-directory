import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveMediaPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class RemoveMediaPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveMediaPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RemoveMediaPathQueryParams;

  @SpeakeasyMetadata()
  security: RemoveMediaPathSecurity;
}


export class RemoveMediaPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
