import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableDeviceBayTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
