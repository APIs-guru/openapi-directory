import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PulseSpatialOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
