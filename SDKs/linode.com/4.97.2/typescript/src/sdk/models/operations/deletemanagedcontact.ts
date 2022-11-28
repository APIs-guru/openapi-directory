import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteManagedContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class DeleteManagedContactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteManagedContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteManagedContactPathParams;

  @SpeakeasyMetadata()
  security: DeleteManagedContactSecurity;
}


export class DeleteManagedContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteManagedContact200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteManagedContactDefaultApplicationJsonObject?: DeleteManagedContactDefaultApplicationJson;
}
