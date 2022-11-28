import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Availability
/** 
 * A message containing availability data relevant to DoubleClick Search.
**/
export class Availability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=availabilityTimestamp" })
  availabilityTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationId" })
  segmentationId?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationName" })
  segmentationName?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentationType" })
  segmentationType?: string;
}
