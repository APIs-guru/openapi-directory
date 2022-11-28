import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceOptionsInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerPadding" })
  consumerPadding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=durationInterval" })
  durationInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=durationMax" })
  durationMax?: number;

  @SpeakeasyMetadata({ data: "json, name=durationMin" })
  durationMin?: number;

  @SpeakeasyMetadata({ data: "json, name=durationSelect" })
  durationSelect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=padding" })
  padding?: number;
}
