import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemoryInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=free" })
  free?: number;

  @SpeakeasyMetadata({ data: "json, name=freeFormated" })
  freeFormated?: string;

  @SpeakeasyMetadata({ data: "json, name=freePercentage" })
  freePercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=totalFormated" })
  totalFormated?: string;

  @SpeakeasyMetadata({ data: "json, name=used" })
  used?: number;

  @SpeakeasyMetadata({ data: "json, name=usedFormated" })
  usedFormated?: string;
}
