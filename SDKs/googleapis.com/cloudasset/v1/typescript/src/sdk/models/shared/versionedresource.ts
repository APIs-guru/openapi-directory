import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VersionedResource
/** 
 * Resource representation as defined by the corresponding service providing the resource for a given API version.
**/
export class VersionedResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
