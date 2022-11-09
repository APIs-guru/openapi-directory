import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessHourInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=is24Hours" })
  is24Hours?: boolean;

  @Metadata({ data: "json, name=isOpen" })
  isOpen?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
