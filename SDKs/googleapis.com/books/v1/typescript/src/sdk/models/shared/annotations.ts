import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Annotation } from "./annotation";



export class Annotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Annotation })
  items?: Annotation[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
