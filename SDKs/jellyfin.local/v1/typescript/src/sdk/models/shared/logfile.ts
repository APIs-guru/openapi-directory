import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;
}
