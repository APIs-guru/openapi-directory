import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostalCodeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=postalCodeRangeBegin" })
  postalCodeRangeBegin?: string;

  @Metadata({ data: "json, name=postalCodeRangeEnd" })
  postalCodeRangeEnd?: string;
}
