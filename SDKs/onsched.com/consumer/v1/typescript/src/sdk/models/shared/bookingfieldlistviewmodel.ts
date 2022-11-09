import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookingFieldListViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
