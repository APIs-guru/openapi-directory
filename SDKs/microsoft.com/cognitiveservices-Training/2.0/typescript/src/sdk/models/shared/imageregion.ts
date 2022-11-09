import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=regionId" })
  regionId?: string;

  @Metadata({ data: "json, name=tagId" })
  tagId?: string;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;

  @Metadata({ data: "json, name=top" })
  top?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
