import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volume } from "./volume";



export class Volume2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Volume })
  items?: Volume[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
