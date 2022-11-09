import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CutoffTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour?: number;

  @Metadata({ data: "json, name=minute" })
  minute?: number;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
