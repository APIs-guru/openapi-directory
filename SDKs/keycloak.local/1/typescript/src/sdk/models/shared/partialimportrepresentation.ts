import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientRepresentation } from "./clientrepresentation";
import { GroupRepresentation } from "./grouprepresentation";
import { IdentityProviderRepresentation } from "./identityproviderrepresentation";
import { RolesRepresentation } from "./rolesrepresentation";
import { UserRepresentation } from "./userrepresentation";

export enum PartialImportRepresentationPolicyEnum {
    Skip = "SKIP"
,    Overwrite = "OVERWRITE"
,    Fail = "FAIL"
}


export class PartialImportRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients", elemType: shared.ClientRepresentation })
  clients?: ClientRepresentation[];

  @Metadata({ data: "json, name=groups", elemType: shared.GroupRepresentation })
  groups?: GroupRepresentation[];

  @Metadata({ data: "json, name=identityProviders", elemType: shared.IdentityProviderRepresentation })
  identityProviders?: IdentityProviderRepresentation[];

  @Metadata({ data: "json, name=ifResourceExists" })
  ifResourceExists?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: PartialImportRepresentationPolicyEnum;

  @Metadata({ data: "json, name=roles" })
  roles?: RolesRepresentation;

  @Metadata({ data: "json, name=users", elemType: shared.UserRepresentation })
  users?: UserRepresentation[];
}
