import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Layersummary } from "./layersummary";



export class Layersummaries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Layersummary })
  items?: Layersummary[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
