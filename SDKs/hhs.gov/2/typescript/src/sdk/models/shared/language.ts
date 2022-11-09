import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Language extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=isoCode" })
  isoCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
