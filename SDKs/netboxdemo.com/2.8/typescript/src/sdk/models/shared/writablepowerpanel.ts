import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritablePowerPanel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @Metadata({ data: "json, name=rack_group" })
  rackGroup?: number;

  @Metadata({ data: "json, name=site" })
  site: number;
}
