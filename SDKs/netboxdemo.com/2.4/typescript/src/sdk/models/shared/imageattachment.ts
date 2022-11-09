import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=image_height" })
  imageHeight: number;

  @Metadata({ data: "json, name=image_width" })
  imageWidth: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=object_id" })
  objectId: number;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
