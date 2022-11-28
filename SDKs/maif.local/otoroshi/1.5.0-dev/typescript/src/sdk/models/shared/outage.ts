import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Outage
/** 
 * An outage by the Snow Monkey on a service
**/
export class Outage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptorId" })
  descriptorId: string;

  @SpeakeasyMetadata({ data: "json, name=descriptorName" })
  descriptorName: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=until" })
  until: string;
}
