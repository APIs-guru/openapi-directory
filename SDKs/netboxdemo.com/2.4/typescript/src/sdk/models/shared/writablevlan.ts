import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableVlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=group" })
  group?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=role" })
  role?: number;

  @Metadata({ data: "json, name=site" })
  site?: number;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=vid" })
  vid: number;
}
