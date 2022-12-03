import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationV1
/** 
 * An classification is a set of information for a specific industry, based on NAICs codes.
**/
export class ClassificationV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=naics_2017_6_digit" })
  naics20176Digit?: number;

  @SpeakeasyMetadata({ data: "json, name=naics_2017_6_digit_description" })
  naics20176DigitDescription?: string;
}
