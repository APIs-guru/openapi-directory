import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoleRepresentationComposites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=realm" })
  realm?: string[];
}
