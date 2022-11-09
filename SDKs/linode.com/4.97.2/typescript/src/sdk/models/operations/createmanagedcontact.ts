import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateManagedContactSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateManagedContactSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateManagedContactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateManagedContactSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateManagedContactSecurityOption2;
}


export class CreateManagedContactRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ManagedContact;

  @Metadata()
  security: CreateManagedContactSecurity;
}


export class CreateManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateManagedContactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedContact?: shared.ManagedContact;

  @Metadata()
  statusCode: number;

  @Metadata()
  createManagedContactDefaultApplicationJsonObject?: CreateManagedContactDefaultApplicationJson;
}
