import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Qualification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=well_class" })
  wellClass: string;
}
