import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Assessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @Metadata({ data: "json, name=markNumber" })
  markNumber?: string;

  @Metadata({ data: "json, name=markType" })
  markType?: string;

  @Metadata({ data: "json, name=openDate" })
  openDate?: Date;
}
