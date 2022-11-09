import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CourseMetaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverImageUrl" })
  coverImageUrl?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: any;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tasksEnabled" })
  tasksEnabled?: boolean;
}
