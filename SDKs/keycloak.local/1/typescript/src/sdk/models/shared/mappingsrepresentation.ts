import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleRepresentation } from "./rolerepresentation";


export class MappingsRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientMappings" })
  clientMappings?: Map<string, any>;

  @Metadata({ data: "json, name=realmMappings", elemType: shared.RoleRepresentation })
  realmMappings?: RoleRepresentation[];
}
