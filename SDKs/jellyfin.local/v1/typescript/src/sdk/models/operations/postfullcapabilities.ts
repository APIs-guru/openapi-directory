import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFullCapabilitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class PostFullCapabilitiesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  clientCapabilitiesDto?: shared.ClientCapabilitiesDto;

  @Metadata({ data: "request, media_type=application/json" })
  clientCapabilitiesDto1?: shared.ClientCapabilitiesDto;

  @Metadata({ data: "request, media_type=text/json" })
  clientCapabilitiesDto2?: shared.ClientCapabilitiesDto;
}


export class PostFullCapabilitiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostFullCapabilitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostFullCapabilitiesQueryParams;

  @Metadata()
  request: PostFullCapabilitiesRequests;

  @Metadata()
  security: PostFullCapabilitiesSecurity;
}


export class PostFullCapabilitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
