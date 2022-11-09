import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DigitalProductFields } from "./digitalproductfields";


export class DigitalProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=digital_product" })
  digitalProduct?: DigitalProductFields;
}
