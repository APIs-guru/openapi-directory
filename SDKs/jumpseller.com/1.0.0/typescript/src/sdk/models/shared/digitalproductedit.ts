import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DigitalProductEditFields } from "./digitalproducteditfields";



export class DigitalProductEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=digital_product" })
  digitalProduct?: DigitalProductEditFields;
}
