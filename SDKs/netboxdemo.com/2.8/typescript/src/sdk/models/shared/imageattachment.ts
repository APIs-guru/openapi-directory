import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=image_height" })
  imageHeight: number;

  @SpeakeasyMetadata({ data: "json, name=image_width" })
  imageWidth: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=object_id" })
  objectId: number;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: Map<string, string>;
}


export class ImageAttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=image_height" })
  imageHeight: number;

  @SpeakeasyMetadata({ data: "json, name=image_width" })
  imageWidth: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=object_id" })
  objectId: number;
}
