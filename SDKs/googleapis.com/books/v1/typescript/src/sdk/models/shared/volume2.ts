import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


export class Volume2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Volume })
  items?: Volume[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
