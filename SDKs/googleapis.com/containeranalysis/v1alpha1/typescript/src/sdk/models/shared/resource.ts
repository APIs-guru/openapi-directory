import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Hash } from "./hash";


// Resource
/** 
 *  Resource is an entity that can have metadata. E.g., a Docker image.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentHash" })
  contentHash?: Hash;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
