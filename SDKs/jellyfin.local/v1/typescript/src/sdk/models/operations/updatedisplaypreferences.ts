import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDisplayPreferencesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" })
  displayPreferencesId: string;
}


export class UpdateDisplayPreferencesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class UpdateDisplayPreferencesRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  displayPreferencesDto?: shared.DisplayPreferencesDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  displayPreferencesDto1?: shared.DisplayPreferencesDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  displayPreferencesDto2?: shared.DisplayPreferencesDto;
}


export class UpdateDisplayPreferencesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateDisplayPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDisplayPreferencesPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateDisplayPreferencesQueryParams;

  @SpeakeasyMetadata()
  request: UpdateDisplayPreferencesRequests;

  @SpeakeasyMetadata()
  security: UpdateDisplayPreferencesSecurity;
}


export class UpdateDisplayPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
