import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BusinessUserViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identityAccount" })
  identityAccount?: boolean;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
