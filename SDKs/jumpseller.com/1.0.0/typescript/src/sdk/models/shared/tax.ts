import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxFields } from "./taxfields";



export class Tax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: TaxFields;
}
