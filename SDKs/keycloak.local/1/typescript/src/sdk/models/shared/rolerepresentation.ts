import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleRepresentationComposites } from "./rolerepresentationcomposites";


export class RoleRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=clientRole" })
  clientRole?: boolean;

  @Metadata({ data: "json, name=composite" })
  composite?: boolean;

  @Metadata({ data: "json, name=composites" })
  composites?: RoleRepresentationComposites;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
