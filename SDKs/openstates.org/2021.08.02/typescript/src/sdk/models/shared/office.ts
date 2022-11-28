import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Office extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: string;
}
