import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsePurpose extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=refUri" })
  refUri?: string;

  @Metadata({ data: "json, name=text" })
  text: string;
}
