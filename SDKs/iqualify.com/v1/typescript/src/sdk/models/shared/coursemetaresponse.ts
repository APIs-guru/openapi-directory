import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CourseMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverImageUrl" })
  coverImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tasksEnabled" })
  tasksEnabled?: boolean;
}
