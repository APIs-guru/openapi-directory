import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volumeannotation } from "./volumeannotation";


export class Volumeannotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Volumeannotation })
  items?: Volumeannotation[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
