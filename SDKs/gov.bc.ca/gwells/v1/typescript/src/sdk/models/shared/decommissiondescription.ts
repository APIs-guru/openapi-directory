import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DecommissionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=material" })
  material: string;

  @Metadata({ data: "json, name=observations" })
  observations?: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}
