import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";



// Resource
/** 
 *  Resource is an entity that can have metadata. E.g., a Docker image.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentHash" })
  contentHash?: Hash;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
