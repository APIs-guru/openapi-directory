import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntryPoint } from "./entrypoint";



export class ActionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_id" })
  actionId: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entry_point" })
  entryPoint: EntryPoint;
}
