import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableAvailableIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=family" })
  family?: number;
}
