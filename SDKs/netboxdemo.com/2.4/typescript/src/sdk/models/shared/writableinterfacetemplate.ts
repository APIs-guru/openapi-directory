import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableInterfaceTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: number;

  @SpeakeasyMetadata({ data: "json, name=form_factor" })
  formFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
