import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ImagePublicStatusEnum {
    Creating = "creating",
    PendingUpload = "pending_upload",
    Available = "available"
}

export enum ImagePublicTypeEnum {
    Manual = "manual",
    Automatic = "automatic"
}


// ImagePublic
/** 
 * Public Image object
**/
export class ImagePublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eol" })
  eol?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ImagePublicStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ImagePublicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
