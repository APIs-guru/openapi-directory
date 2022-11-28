import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomFieldSelectOptionFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
