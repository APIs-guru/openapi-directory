import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";



// Buckets
/** 
 * A list of buckets.
**/
export class Buckets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Bucket })
  items?: Bucket[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
