import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransitTableTransitTimeRowTransitTimeValue } from "./transittabletransittimerowtransittimevalue";


export class TransitTableTransitTimeRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.TransitTableTransitTimeRowTransitTimeValue })
  values?: TransitTableTransitTimeRowTransitTimeValue[];
}
