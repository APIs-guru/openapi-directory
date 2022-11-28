import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransitTableTransitTimeRowTransitTimeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxTransitTimeInDays" })
  maxTransitTimeInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=minTransitTimeInDays" })
  minTransitTimeInDays?: number;
}
