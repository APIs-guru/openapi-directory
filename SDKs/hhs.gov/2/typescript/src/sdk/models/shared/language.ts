import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isoCode" })
  isoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
