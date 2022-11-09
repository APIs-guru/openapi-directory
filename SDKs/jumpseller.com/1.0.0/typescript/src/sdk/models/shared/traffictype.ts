import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TrafficType extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
