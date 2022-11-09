import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Availability
/** 
 * A message containing availability data relevant to DoubleClick Search.
**/
export class Availability extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @Metadata({ data: "json, name=availabilityTimestamp" })
  availabilityTimestamp?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=segmentationId" })
  segmentationId?: string;

  @Metadata({ data: "json, name=segmentationName" })
  segmentationName?: string;

  @Metadata({ data: "json, name=segmentationType" })
  segmentationType?: string;
}
