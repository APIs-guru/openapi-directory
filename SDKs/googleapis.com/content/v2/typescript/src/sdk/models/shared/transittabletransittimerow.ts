import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransitTableTransitTimeRowTransitTimeValue } from "./transittabletransittimerowtransittimevalue";



export class TransitTableTransitTimeRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: TransitTableTransitTimeRowTransitTimeValue })
  values?: TransitTableTransitTimeRowTransitTimeValue[];
}
