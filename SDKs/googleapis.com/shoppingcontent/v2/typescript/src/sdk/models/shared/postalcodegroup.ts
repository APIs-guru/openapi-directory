import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostalCodeRange } from "./postalcoderange";


export class PostalCodeGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postalCodeRanges", elemType: shared.PostalCodeRange })
  postalCodeRanges?: PostalCodeRange[];
}
