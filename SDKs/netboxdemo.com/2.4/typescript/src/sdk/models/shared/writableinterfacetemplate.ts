import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableInterfaceTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=form_factor" })
  formFactor?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;
}
