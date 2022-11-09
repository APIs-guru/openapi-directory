import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleRepresentation } from "./rolerepresentation";


export class RolesRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: Map<string, any>;

  @Metadata({ data: "json, name=realm", elemType: shared.RoleRepresentation })
  realm?: RoleRepresentation[];
}
