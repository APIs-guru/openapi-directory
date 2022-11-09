import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessServiceViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
