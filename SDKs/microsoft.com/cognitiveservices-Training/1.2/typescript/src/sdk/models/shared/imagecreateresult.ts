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
    ErrorUnknown = "ErrorUnknown"
}


export class ImageCreateResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ImageCreateResultStatusEnum;
}
