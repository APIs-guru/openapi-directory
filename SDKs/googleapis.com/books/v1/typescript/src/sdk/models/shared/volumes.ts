import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


export class Volumes extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Volume })
  items?: Volume[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
