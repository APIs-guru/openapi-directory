import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EntryPoint } from "./entrypoint";


export class ActionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_id" })
  actionId: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=entry_point" })
  entryPoint: EntryPoint;
}
