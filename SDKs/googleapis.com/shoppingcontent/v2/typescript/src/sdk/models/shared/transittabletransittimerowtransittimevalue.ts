import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransitTableTransitTimeRowTransitTimeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxTransitTimeInDays" })
  maxTransitTimeInDays?: number;

  @Metadata({ data: "json, name=minTransitTimeInDays" })
  minTransitTimeInDays?: number;
}
