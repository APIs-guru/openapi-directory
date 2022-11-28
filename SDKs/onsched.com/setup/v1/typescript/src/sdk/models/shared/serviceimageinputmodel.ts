import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceImageInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageFileData" })
  imageFileData?: string;

  @SpeakeasyMetadata({ data: "json, name=imageFileName" })
  imageFileName?: string;
}
