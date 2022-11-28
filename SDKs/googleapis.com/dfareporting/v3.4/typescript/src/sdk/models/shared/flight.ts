import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Flight
/** 
 * Flight
**/
export class Flight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rateOrCost" })
  rateOrCost?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
