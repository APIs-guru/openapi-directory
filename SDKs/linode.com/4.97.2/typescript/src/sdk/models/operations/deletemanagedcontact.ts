import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteManagedContactPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contactId" })
  contactId: number;
}


export class DeleteManagedContactSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteManagedContactSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteManagedContactSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteManagedContactSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteManagedContactSecurityOption2;
}


export class DeleteManagedContactRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteManagedContactPathParams;

  @Metadata()
  security: DeleteManagedContactSecurity;
}


export class DeleteManagedContactDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteManagedContactResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteManagedContact200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteManagedContactDefaultApplicationJsonObject?: DeleteManagedContactDefaultApplicationJson;
}
