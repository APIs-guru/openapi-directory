import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentation } from "./rolerepresentation";



export class RolesRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=realm", elemType: RoleRepresentation })
  realm?: RoleRepresentation[];
}
