import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



export class Volumes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Volume })
  items?: Volume[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
