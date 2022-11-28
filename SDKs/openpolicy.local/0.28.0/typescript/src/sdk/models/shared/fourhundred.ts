import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FourHundred extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: any[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
