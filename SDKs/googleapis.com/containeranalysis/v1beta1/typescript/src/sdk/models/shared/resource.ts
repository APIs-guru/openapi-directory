import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";



// Resource
/** 
 * An entity that can have metadata. For example, a Docker image.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentHash" })
  contentHash?: Hash;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
