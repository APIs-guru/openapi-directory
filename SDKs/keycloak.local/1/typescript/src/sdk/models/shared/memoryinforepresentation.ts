import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemoryInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=free" })
  free?: number;

  @Metadata({ data: "json, name=freeFormated" })
  freeFormated?: string;

  @Metadata({ data: "json, name=freePercentage" })
  freePercentage?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=totalFormated" })
  totalFormated?: string;

  @Metadata({ data: "json, name=used" })
  used?: number;

  @Metadata({ data: "json, name=usedFormated" })
  usedFormated?: string;
}
