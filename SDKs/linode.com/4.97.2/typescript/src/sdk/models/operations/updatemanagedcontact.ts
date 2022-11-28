import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateManagedContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class UpdateManagedContactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateManagedContactPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagedContactInput;

  @SpeakeasyMetadata()
  security: UpdateManagedContactSecurity;
}


export class UpdateManagedContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedContact?: shared.ManagedContact;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateManagedContactDefaultApplicationJsonObject?: UpdateManagedContactDefaultApplicationJson;
}
