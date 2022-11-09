import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimestampResMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=invited" })
  invited?: string;

  @Metadata({ data: "json, name=joined" })
  joined?: string;

  @Metadata({ data: "json, name=left" })
  left?: string;
}
