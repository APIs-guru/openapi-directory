import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Screen extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assembly_type" })
  assemblyType: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=internal_diameter" })
  internalDiameter?: string;

  @SpeakeasyMetadata({ data: "json, name=slot_size" })
  slotSize?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}
