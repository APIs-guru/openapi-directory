import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateManagedContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class UpdateManagedContactSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateManagedContactSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateManagedContactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateManagedContactSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateManagedContactSecurityOption2;
}


export class UpdateManagedContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateManagedContactPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagedContact;

  @Metadata()
  security: UpdateManagedContactSecurity;
}


export class UpdateManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedContactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedContact?: shared.ManagedContact;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateManagedContactDefaultApplicationJsonObject?: UpdateManagedContactDefaultApplicationJson;
}
