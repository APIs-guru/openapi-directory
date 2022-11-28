import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=DateModified" })
  dateModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;
}
