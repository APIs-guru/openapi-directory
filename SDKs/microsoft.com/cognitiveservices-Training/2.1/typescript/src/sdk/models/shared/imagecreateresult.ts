import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";


export enum ImageCreateResultStatusEnum {
    Ok = "OK",
    OkDuplicate = "OKDuplicate",
    ErrorSource = "ErrorSource",
    ErrorImageFormat = "ErrorImageFormat",
    ErrorImageSize = "ErrorImageSize",
    ErrorStorage = "ErrorStorage",
    ErrorLimitExceed = "ErrorLimitExceed",
    ErrorTagLimitExceed = "ErrorTagLimitExceed",
    ErrorRegionLimitExceed = "ErrorRegionLimitExceed",
    ErrorUnknown = "ErrorUnknown"
}


export class ImageCreateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=sourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImageCreateResultStatusEnum;
}
