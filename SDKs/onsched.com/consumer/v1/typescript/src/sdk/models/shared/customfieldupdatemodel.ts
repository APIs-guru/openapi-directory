import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomFieldUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field1" })
  field1?: string;

  @SpeakeasyMetadata({ data: "json, name=field10" })
  field10?: string;

  @SpeakeasyMetadata({ data: "json, name=field2" })
  field2?: string;

  @SpeakeasyMetadata({ data: "json, name=field3" })
  field3?: string;

  @SpeakeasyMetadata({ data: "json, name=field4" })
  field4?: string;

  @SpeakeasyMetadata({ data: "json, name=field5" })
  field5?: string;

  @SpeakeasyMetadata({ data: "json, name=field6" })
  field6?: string;

  @SpeakeasyMetadata({ data: "json, name=field7" })
  field7?: string;

  @SpeakeasyMetadata({ data: "json, name=field8" })
  field8?: string;

  @SpeakeasyMetadata({ data: "json, name=field9" })
  field9?: string;
}
