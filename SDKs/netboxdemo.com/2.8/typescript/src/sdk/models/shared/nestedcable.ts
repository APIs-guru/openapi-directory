import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedCable extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
