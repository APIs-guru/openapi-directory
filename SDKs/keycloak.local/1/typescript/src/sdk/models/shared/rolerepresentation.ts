import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleRepresentationComposites } from "./rolerepresentationcomposites";



export class RoleRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientRole" })
  clientRole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=composite" })
  composite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=composites" })
  composites?: RoleRepresentationComposites;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
