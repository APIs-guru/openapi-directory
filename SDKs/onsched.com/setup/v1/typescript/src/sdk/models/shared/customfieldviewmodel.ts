import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomFieldViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
