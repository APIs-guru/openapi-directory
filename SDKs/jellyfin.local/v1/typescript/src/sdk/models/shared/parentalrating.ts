import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParentalRating
/** 
 * Class ParentalRating.
**/
export class ParentalRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: number;
}
