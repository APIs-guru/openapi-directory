import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscriptionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communicationMethod" })
  communicationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInternal" })
  isInternal: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;
}
