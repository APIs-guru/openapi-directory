import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddMediaPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class AddMediaPathRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  mediaPathDto?: shared.MediaPathDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  mediaPathDto1?: shared.MediaPathDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  mediaPathDto2?: shared.MediaPathDto;
}


export class AddMediaPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddMediaPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AddMediaPathQueryParams;

  @SpeakeasyMetadata()
  request: AddMediaPathRequests;

  @SpeakeasyMetadata()
  security: AddMediaPathSecurity;
}


export class AddMediaPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
