import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedDeviceType } from "./nesteddevicetype";


export class InterfaceTemplateFormFactor extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class InterfaceTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=form_factor" })
  formFactor?: InterfaceTemplateFormFactor;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;
}
