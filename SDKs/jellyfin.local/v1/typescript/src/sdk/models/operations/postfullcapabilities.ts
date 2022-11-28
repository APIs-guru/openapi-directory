import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFullCapabilitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class PostFullCapabilitiesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  clientCapabilitiesDto?: shared.ClientCapabilitiesDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  clientCapabilitiesDto1?: shared.ClientCapabilitiesDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  clientCapabilitiesDto2?: shared.ClientCapabilitiesDto;
}


export class PostFullCapabilitiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostFullCapabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostFullCapabilitiesQueryParams;

  @SpeakeasyMetadata()
  request: PostFullCapabilitiesRequests;

  @SpeakeasyMetadata()
  security: PostFullCapabilitiesSecurity;
}


export class PostFullCapabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
