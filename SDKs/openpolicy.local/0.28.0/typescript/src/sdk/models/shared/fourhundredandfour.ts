import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FourHundredAndFour extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
