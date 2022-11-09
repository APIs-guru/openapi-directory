import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FourHundredAndOneResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
