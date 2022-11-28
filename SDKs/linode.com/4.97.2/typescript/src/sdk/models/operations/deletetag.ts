import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label" })
  label: string;
}


export class DeleteTagSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteTagDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagPathParams;

  @SpeakeasyMetadata()
  security: DeleteTagSecurity;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteTag200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteTagDefaultApplicationJsonObject?: DeleteTagDefaultApplicationJson;
}
