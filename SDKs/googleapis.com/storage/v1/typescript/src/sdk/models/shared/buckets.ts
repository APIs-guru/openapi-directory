import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";


// Buckets
/** 
 * A list of buckets.
**/
export class Buckets extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Bucket })
  items?: Bucket[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
