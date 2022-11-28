import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiaAboutPageSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
