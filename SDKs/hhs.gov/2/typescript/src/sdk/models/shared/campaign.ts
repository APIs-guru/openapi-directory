import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


export class Campaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactEmail" })
  contactEmail?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
