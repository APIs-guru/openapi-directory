import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookingFieldListViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
