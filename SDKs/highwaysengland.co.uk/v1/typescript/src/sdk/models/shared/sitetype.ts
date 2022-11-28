import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SiteType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
