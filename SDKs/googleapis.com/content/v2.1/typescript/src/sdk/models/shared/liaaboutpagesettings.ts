import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiaAboutPageSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
