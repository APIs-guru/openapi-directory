import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitType extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit_count" })
  circuitCount?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
