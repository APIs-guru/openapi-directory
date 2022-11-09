import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";

export enum ImageCreateResultStatusEnum {
    Ok = "OK"
,    OkDuplicate = "OKDuplicate"
,    ErrorSource = "ErrorSource"
,    ErrorImageFormat = "ErrorImageFormat"
,    ErrorImageSize = "ErrorImageSize"
,    ErrorStorage = "ErrorStorage"
,    ErrorLimitExceed = "ErrorLimitExceed"
,    ErrorTagLimitExceed = "ErrorTagLimitExceed"
,    ErrorUnknown = "ErrorUnknown"
}


export class ImageCreateResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Image" })
  image?: Image;

  @Metadata({ data: "json, name=SourceUrl" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ImageCreateResultStatusEnum;
}
