import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitTableTransitTimeRow } from "./transittabletransittimerow";



export class TransitTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postalCodeGroupNames" })
  postalCodeGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: TransitTableTransitTimeRow })
  rows?: TransitTableTransitTimeRow[];

  @SpeakeasyMetadata({ data: "json, name=transitTimeLabels" })
  transitTimeLabels?: string[];
}
