import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DigitalProductEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
