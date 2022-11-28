import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Availablenumber } from "./availablenumber";



export class AvailableNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=numbers", elemType: Availablenumber })
  numbers?: Availablenumber[];
}
