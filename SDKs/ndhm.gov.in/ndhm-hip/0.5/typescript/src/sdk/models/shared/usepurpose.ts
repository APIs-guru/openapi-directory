import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsePurpose extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=refUri" })
  refUri?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}
