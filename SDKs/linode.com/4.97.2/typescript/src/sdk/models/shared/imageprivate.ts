import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ImagePrivateStatusEnum {
    Creating = "creating"
,    PendingUpload = "pending_upload"
,    Available = "available"
}

export enum ImagePrivateTypeEnum {
    Manual = "manual"
,    Automatic = "automatic"
}


// ImagePrivate
/** 
 * Private Image object
**/
export class ImagePrivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=eol" })
  eol?: Date;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=status" })
  status?: ImagePrivateStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: ImagePrivateTypeEnum;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
