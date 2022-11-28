import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectParameterDetails } from "./projectparameterdetails";



export class ProjectsRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bbox" })
  bbox?: number[];

  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isAnalysis" })
  isAnalysis?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isMobile" })
  isMobile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @SpeakeasyMetadata({ data: "json, name=locationIds" })
  locationIds: number[];

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations: number;

  @SpeakeasyMetadata({ data: "json, name=measurements" })
  measurements: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: ProjectParameterDetails })
  parameters: ProjectParameterDetails[];

  @SpeakeasyMetadata({ data: "json, name=sensorType" })
  sensorType?: string;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources?: any[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle: string;
}
