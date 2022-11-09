import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColorDefinition } from "./colordefinition";
import { ColorDefinition } from "./colordefinition";


export class Colors extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendar", elemType: shared.ColorDefinition })
  calendar?: Map<string, ColorDefinition>;

  @Metadata({ data: "json, name=event", elemType: shared.ColorDefinition })
  event?: Map<string, ColorDefinition>;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
