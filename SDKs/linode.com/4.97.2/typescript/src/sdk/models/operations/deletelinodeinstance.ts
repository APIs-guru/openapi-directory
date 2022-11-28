import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class DeleteLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLinodeInstancePathParams;

  @SpeakeasyMetadata()
  security: DeleteLinodeInstanceSecurity;
}


export class DeleteLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLinodeInstanceDefaultApplicationJsonObject?: DeleteLinodeInstanceDefaultApplicationJson;
}
