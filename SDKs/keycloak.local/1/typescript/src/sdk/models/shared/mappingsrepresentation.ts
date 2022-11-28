import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentation } from "./rolerepresentation";



export class MappingsRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientMappings" })
  clientMappings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=realmMappings", elemType: RoleRepresentation })
  realmMappings?: RoleRepresentation[];
}
