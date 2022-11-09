import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Annotation } from "./annotation";


export class Annotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Annotation })
  items?: Annotation[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
