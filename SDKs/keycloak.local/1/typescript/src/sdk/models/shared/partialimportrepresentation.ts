import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientRepresentation } from "./clientrepresentation";
import { GroupRepresentation } from "./grouprepresentation";
import { IdentityProviderRepresentation } from "./identityproviderrepresentation";
import { RolesRepresentation } from "./rolesrepresentation";
import { UserRepresentation } from "./userrepresentation";


export enum PartialImportRepresentationPolicyEnum {
    Skip = "SKIP",
    Overwrite = "OVERWRITE",
    Fail = "FAIL"
}


export class PartialImportRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients", elemType: ClientRepresentation })
  clients?: ClientRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupRepresentation })
  groups?: GroupRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=identityProviders", elemType: IdentityProviderRepresentation })
  identityProviders?: IdentityProviderRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=ifResourceExists" })
  ifResourceExists?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: PartialImportRepresentationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: RolesRepresentation;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserRepresentation })
  users?: UserRepresentation[];
}
