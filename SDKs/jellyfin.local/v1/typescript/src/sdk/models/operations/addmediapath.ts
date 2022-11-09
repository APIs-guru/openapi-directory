import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddMediaPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=refreshLibrary" })
  refreshLibrary?: boolean;
}


export class AddMediaPathRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  mediaPathDto?: shared.MediaPathDto;

  @Metadata({ data: "request, media_type=application/json" })
  mediaPathDto1?: shared.MediaPathDto;

  @Metadata({ data: "request, media_type=text/json" })
  mediaPathDto2?: shared.MediaPathDto;
}


export class AddMediaPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddMediaPathRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AddMediaPathQueryParams;

  @Metadata()
  request: AddMediaPathRequests;

  @Metadata()
  security: AddMediaPathSecurity;
}


export class AddMediaPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
