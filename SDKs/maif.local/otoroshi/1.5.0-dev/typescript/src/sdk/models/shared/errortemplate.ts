import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ErrorTemplate
/** 
 * Error templates for a service descriptor
**/
export class ErrorTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages" })
  messages: Map<string, string>;

  @Metadata({ data: "json, name=serviceId" })
  serviceId: string;

  @Metadata({ data: "json, name=template40x" })
  template40x: string;

  @Metadata({ data: "json, name=template50x" })
  template50x: string;

  @Metadata({ data: "json, name=templateBuild" })
  templateBuild: string;

  @Metadata({ data: "json, name=templateMaintenance" })
  templateMaintenance: string;
}
