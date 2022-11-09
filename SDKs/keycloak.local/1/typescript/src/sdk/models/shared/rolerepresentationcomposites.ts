import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RoleRepresentationComposites extends SpeakeasyBase {
  @Metadata({ data: "json, name=client" })
  client?: Map<string, any>;

  @Metadata({ data: "json, name=realm" })
  realm?: string[];
}
