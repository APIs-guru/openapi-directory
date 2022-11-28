import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Assessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=markNumber" })
  markNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=markType" })
  markType?: string;

  @SpeakeasyMetadata({ data: "json, name=openDate" })
  openDate?: Date;
}
