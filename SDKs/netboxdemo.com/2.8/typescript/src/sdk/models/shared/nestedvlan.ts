import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedVlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=vid" })
  vid: number;
}
