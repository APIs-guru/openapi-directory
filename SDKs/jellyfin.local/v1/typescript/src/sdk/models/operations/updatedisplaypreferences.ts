import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDisplayPreferencesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" })
  displayPreferencesId: string;
}


export class UpdateDisplayPreferencesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class UpdateDisplayPreferencesRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  displayPreferencesDto?: shared.DisplayPreferencesDto;

  @Metadata({ data: "request, media_type=application/json" })
  displayPreferencesDto1?: shared.DisplayPreferencesDto;

  @Metadata({ data: "request, media_type=text/json" })
  displayPreferencesDto2?: shared.DisplayPreferencesDto;
}


export class UpdateDisplayPreferencesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateDisplayPreferencesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDisplayPreferencesPathParams;

  @Metadata()
  queryParams: UpdateDisplayPreferencesQueryParams;

  @Metadata()
  request: UpdateDisplayPreferencesRequests;

  @Metadata()
  security: UpdateDisplayPreferencesSecurity;
}


export class UpdateDisplayPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
