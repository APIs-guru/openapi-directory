import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DigitalProductFields } from "./digitalproductfields";



export class DigitalProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digital_product" })
  digitalProduct?: DigitalProductFields;
}
