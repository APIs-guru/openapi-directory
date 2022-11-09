import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry: Date;

  @Metadata({ data: "json, name=keyValue" })
  keyValue: string;

  @Metadata({ data: "json, name=parameters" })
  parameters: string;
}
