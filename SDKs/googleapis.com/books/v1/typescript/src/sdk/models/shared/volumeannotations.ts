import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Volumeannotation } from "./volumeannotation";



export class Volumeannotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Volumeannotation })
  items?: Volumeannotation[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
