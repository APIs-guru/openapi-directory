import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Qualification extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=well_class" })
  wellClass: string;
}
