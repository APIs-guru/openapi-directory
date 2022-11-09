import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Screen extends SpeakeasyBase {
  @Metadata({ data: "json, name=assembly_type" })
  assemblyType: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=internal_diameter" })
  internalDiameter?: string;

  @Metadata({ data: "json, name=slot_size" })
  slotSize?: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}
