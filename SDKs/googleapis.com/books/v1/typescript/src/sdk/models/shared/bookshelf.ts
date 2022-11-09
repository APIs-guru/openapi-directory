import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Bookshelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: string;

  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=volumeCount" })
  volumeCount?: number;

  @Metadata({ data: "json, name=volumesLastUpdated" })
  volumesLastUpdated?: string;
}
