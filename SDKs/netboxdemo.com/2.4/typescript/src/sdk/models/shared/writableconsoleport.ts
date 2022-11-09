import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableConsolePort extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_status" })
  connectionStatus?: boolean;

  @Metadata({ data: "json, name=cs_port" })
  csPort?: number;

  @Metadata({ data: "json, name=device" })
  device: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
