import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Bookshelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeCount" })
  volumeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=volumesLastUpdated" })
  volumesLastUpdated?: string;
}
