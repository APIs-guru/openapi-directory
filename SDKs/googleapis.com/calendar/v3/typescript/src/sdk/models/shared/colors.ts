import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColorDefinition } from "./colordefinition";



export class Colors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendar", elemType: ColorDefinition })
  calendar?: Map<string, ColorDefinition>;

  @SpeakeasyMetadata({ data: "json, name=event", elemType: ColorDefinition })
  event?: Map<string, ColorDefinition>;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
