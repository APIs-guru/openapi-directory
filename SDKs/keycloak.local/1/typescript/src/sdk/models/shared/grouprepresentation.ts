import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupRepresentation } from "./grouprepresentation";


export class GroupRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=clientRoles" })
  clientRoles?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=realmRoles" })
  realmRoles?: string[];

  @Metadata({ data: "json, name=subGroups", elemType: shared.GroupRepresentation })
  subGroups?: GroupRepresentation[];
}
