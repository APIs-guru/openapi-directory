import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostalCodeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postalCodeRangeBegin" })
  postalCodeRangeBegin?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodeRangeEnd" })
  postalCodeRangeEnd?: string;
}
