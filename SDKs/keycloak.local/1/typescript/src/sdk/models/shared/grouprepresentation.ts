import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientRoles" })
  clientRoles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=realmRoles" })
  realmRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=subGroups", elemType: GroupRepresentation })
  subGroups?: GroupRepresentation[];
}
