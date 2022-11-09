import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExposedApi
/** 
 * The Open API configuration for your service (if one)
**/
export class ExposedApi extends SpeakeasyBase {
  @Metadata({ data: "json, name=exposeApi" })
  exposeApi: boolean;

  @Metadata({ data: "json, name=openApiDescriptorUrl" })
  openApiDescriptorUrl?: string;
}
