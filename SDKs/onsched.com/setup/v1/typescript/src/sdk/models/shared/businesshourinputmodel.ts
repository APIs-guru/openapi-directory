import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BusinessHourInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=is24Hours" })
  is24Hours?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isOpen" })
  isOpen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
