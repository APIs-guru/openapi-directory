import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaxFields } from "./taxfields";


export class Tax extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax" })
  tax?: TaxFields;
}
