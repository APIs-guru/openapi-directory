import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorTemplate
/** 
 * Error templates for a service descriptor
**/
export class ErrorTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "json, name=template40x" })
  template40x: string;

  @SpeakeasyMetadata({ data: "json, name=template50x" })
  template50x: string;

  @SpeakeasyMetadata({ data: "json, name=templateBuild" })
  templateBuild: string;

  @SpeakeasyMetadata({ data: "json, name=templateMaintenance" })
  templateMaintenance: string;
}
