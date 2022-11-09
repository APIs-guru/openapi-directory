import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Flight
/** 
 * Flight
**/
export class Flight extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=rateOrCost" })
  rateOrCost?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=units" })
  units?: string;
}
