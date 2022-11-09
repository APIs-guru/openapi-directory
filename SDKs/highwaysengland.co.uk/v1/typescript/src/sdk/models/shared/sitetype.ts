import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SiteType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
