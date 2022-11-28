import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxEditFields } from "./taxeditfields";



export class TaxEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: TaxEditFields;
}
