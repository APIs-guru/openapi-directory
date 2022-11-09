import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FourHundredAndFour extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}
