import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResourceGroupViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingNotification" })
  bookingNotification?: number;

  @SpeakeasyMetadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}
