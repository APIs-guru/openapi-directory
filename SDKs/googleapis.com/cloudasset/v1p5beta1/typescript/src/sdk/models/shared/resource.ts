import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Resource
/** 
 * A representation of a Google Cloud resource.
**/
export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=discoveryDocumentUri" })
  discoveryDocumentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=discoveryName" })
  discoveryName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
