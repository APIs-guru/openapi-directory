import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BusinessServiceViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
