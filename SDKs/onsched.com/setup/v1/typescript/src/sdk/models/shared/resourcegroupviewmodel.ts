import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceGroupViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}
