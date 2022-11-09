import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersionedResource
/** 
 * Resource representation as defined by the corresponding service providing the resource for a given API version.
**/
export class VersionedResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
