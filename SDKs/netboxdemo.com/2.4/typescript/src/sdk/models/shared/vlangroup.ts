import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedSite } from "./nestedsite";


export class VlanGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
