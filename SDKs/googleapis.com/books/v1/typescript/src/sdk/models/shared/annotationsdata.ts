import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeoAnnotationdata } from "./geoannotationdata";


export class Annotationsdata extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.GeoAnnotationdata })
  items?: GeoAnnotationdata[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
