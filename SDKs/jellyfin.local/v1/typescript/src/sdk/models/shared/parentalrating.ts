import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParentalRating
/** 
 * Class ParentalRating.
**/
export class ParentalRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: number;
}
