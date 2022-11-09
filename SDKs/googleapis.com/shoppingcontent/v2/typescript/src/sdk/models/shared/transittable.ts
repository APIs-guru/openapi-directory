import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransitTableTransitTimeRow } from "./transittabletransittimerow";


export class TransitTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=postalCodeGroupNames" })
  postalCodeGroupNames?: string[];

  @Metadata({ data: "json, name=rows", elemType: shared.TransitTableTransitTimeRow })
  rows?: TransitTableTransitTimeRow[];

  @Metadata({ data: "json, name=transitTimeLabels" })
  transitTimeLabels?: string[];
}
