import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceOptionsUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerPadding" })
  consumerPadding?: boolean;

  @Metadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @Metadata({ data: "json, name=durationInterval" })
  durationInterval?: number;

  @Metadata({ data: "json, name=durationMax" })
  durationMax?: number;

  @Metadata({ data: "json, name=durationMin" })
  durationMin?: number;

  @Metadata({ data: "json, name=durationSelect" })
  durationSelect?: boolean;

  @Metadata({ data: "json, name=padding" })
  padding?: number;
}
