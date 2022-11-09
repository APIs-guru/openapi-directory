import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Resource
/** 
 * A representation of a Google Cloud resource.
**/
export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=discoveryDocumentUri" })
  discoveryDocumentUri?: string;

  @Metadata({ data: "json, name=discoveryName" })
  discoveryName?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
