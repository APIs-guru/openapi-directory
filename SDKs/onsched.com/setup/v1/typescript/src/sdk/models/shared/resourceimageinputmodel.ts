import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceImageInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageFileData" })
  imageFileData?: string;

  @Metadata({ data: "json, name=imageFileName" })
  imageFileName?: string;
}
