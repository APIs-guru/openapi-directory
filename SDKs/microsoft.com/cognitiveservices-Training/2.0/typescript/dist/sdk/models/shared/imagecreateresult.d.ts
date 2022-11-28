import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
export declare enum ImageCreateResultStatusEnum {
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
export declare class ImageCreateResult extends SpeakeasyBase {
    image?: Image;
    sourceUrl?: string;
    status?: ImageCreateResultStatusEnum;
}
