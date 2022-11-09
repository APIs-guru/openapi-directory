import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Layersummary } from "./layersummary";


export class Layersummaries extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Layersummary })
  items?: Layersummary[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
