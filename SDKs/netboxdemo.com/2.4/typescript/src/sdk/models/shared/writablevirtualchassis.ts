import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableVirtualChassis extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=master" })
  master: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
