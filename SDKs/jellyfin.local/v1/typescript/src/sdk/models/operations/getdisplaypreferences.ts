import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDisplayPreferencesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" })
  displayPreferencesId: string;
}


export class GetDisplayPreferencesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetDisplayPreferencesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDisplayPreferencesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDisplayPreferencesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDisplayPreferencesQueryParams;

  @SpeakeasyMetadata()
  security: GetDisplayPreferencesSecurity;
}


export class GetDisplayPreferencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  displayPreferencesDto?: shared.DisplayPreferencesDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
