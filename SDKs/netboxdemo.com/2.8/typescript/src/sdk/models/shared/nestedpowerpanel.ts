import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedPowerPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
