import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExposedApi
/** 
 * The Open API configuration for your service (if one)
**/
export class ExposedApi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exposeApi" })
  exposeApi: boolean;

  @SpeakeasyMetadata({ data: "json, name=openApiDescriptorUrl" })
  openApiDescriptorUrl?: string;
}
