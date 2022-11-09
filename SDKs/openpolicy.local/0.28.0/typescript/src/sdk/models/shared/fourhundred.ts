import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FourHundred extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=errors" })
  errors?: any[];

  @Metadata({ data: "json, name=message" })
  message: string;
}
