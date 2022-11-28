import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";



export class RackGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
