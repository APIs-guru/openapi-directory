import { SpeakeasyBase } from "../../../internal/utils";
import { ClientRepresentation } from "./clientrepresentation";
import { GroupRepresentation } from "./grouprepresentation";
import { IdentityProviderRepresentation } from "./identityproviderrepresentation";
import { RolesRepresentation } from "./rolesrepresentation";
import { UserRepresentation } from "./userrepresentation";
export declare enum PartialImportRepresentationPolicyEnum {
    Skip = "SKIP",
    Overwrite = "OVERWRITE",
    Fail = "FAIL"
}
export declare class PartialImportRepresentation extends SpeakeasyBase {
    clients?: ClientRepresentation[];
    groups?: GroupRepresentation[];
    identityProviders?: IdentityProviderRepresentation[];
    ifResourceExists?: string;
    policy?: PartialImportRepresentationPolicyEnum;
    roles?: RolesRepresentation;
    users?: UserRepresentation[];
}
