import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDisplayPreferencesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=displayPreferencesId" })
  displayPreferencesId: string;
}


export class GetDisplayPreferencesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client" })
  client: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetDisplayPreferencesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetDisplayPreferencesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDisplayPreferencesPathParams;

  @Metadata()
  queryParams: GetDisplayPreferencesQueryParams;

  @Metadata()
  security: GetDisplayPreferencesSecurity;
}


export class GetDisplayPreferencesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  displayPreferencesDto?: shared.DisplayPreferencesDto;

  @Metadata()
  statusCode: number;
}
