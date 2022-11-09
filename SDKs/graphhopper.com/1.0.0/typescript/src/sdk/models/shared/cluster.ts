import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
