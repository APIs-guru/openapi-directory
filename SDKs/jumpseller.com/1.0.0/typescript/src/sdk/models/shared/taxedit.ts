import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaxEditFields } from "./taxeditfields";


export class TaxEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax" })
  tax?: TaxEditFields;
}
