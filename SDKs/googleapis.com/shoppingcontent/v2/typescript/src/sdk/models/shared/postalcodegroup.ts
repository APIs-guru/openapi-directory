import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeRange } from "./postalcoderange";



export class PostalCodeGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCodeRanges", elemType: PostalCodeRange })
  postalCodeRanges?: PostalCodeRange[];
}
