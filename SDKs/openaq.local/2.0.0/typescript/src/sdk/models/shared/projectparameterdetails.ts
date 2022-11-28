import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectParameterDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=lastValue" })
  lastValue: number;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations: number;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter: string;

  @SpeakeasyMetadata({ data: "json, name=parameterId" })
  parameterId: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;
}
