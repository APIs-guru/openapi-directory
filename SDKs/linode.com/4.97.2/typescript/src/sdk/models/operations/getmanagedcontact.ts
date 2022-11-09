import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class GetManagedContactSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedContactSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedContactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedContactSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedContactSecurityOption2;
}


export class GetManagedContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetManagedContactPathParams;

  @Metadata()
  security: GetManagedContactSecurity;
}


export class GetManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedContactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedContact?: shared.ManagedContact;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedContactDefaultApplicationJsonObject?: GetManagedContactDefaultApplicationJson;
}
