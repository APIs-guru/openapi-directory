import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DigitalProductEditFields } from "./digitalproducteditfields";


export class DigitalProductEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=digital_product" })
  digitalProduct?: DigitalProductEditFields;
}
