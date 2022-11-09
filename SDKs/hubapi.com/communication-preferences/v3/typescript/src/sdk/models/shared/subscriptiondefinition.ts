import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubscriptionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=communicationMethod" })
  communicationMethod?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=isActive" })
  isActive: boolean;

  @Metadata({ data: "json, name=isDefault" })
  isDefault: boolean;

  @Metadata({ data: "json, name=isInternal" })
  isInternal: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
