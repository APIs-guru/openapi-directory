import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequiredActionProviderRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alias" })
  alias?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=defaultAction" })
  defaultAction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;
}
