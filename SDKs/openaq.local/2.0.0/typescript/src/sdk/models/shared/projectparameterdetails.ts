import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProjectParameterDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average: number;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=lastValue" })
  lastValue: number;

  @Metadata({ data: "json, name=locations" })
  locations: number;

  @Metadata({ data: "json, name=parameter" })
  parameter: string;

  @Metadata({ data: "json, name=parameterId" })
  parameterId: number;

  @Metadata({ data: "json, name=unit" })
  unit: string;
}
