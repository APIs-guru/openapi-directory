import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Outage
/** 
 * An outage by the Snow Monkey on a service
**/
export class Outage extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptorId" })
  descriptorId: string;

  @Metadata({ data: "json, name=descriptorName" })
  descriptorName: string;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=until" })
  until: string;
}
