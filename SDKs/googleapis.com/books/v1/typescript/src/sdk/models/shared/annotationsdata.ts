import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoAnnotationdata } from "./geoannotationdata";



export class Annotationsdata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: GeoAnnotationdata })
  items?: GeoAnnotationdata[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
