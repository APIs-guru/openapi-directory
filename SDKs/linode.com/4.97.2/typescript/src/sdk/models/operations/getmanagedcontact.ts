import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetManagedContactPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class GetManagedContactSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedContactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetManagedContactPathParams;

  @SpeakeasyMetadata()
  security: GetManagedContactSecurity;
}


export class GetManagedContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedContact?: shared.ManagedContact;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getManagedContactDefaultApplicationJsonObject?: GetManagedContactDefaultApplicationJson;
}
