import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableConsolePortTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_type" })
  deviceType: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
