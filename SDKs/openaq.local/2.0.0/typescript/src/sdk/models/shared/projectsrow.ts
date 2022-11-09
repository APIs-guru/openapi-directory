import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectParameterDetails } from "./projectparameterdetails";


export class ProjectsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=bbox" })
  bbox?: number[];

  @Metadata({ data: "json, name=countries" })
  countries?: string[];

  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=firstUpdated" })
  firstUpdated: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isAnalysis" })
  isAnalysis?: boolean;

  @Metadata({ data: "json, name=isMobile" })
  isMobile?: boolean;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated: Date;

  @Metadata({ data: "json, name=locationIds" })
  locationIds: number[];

  @Metadata({ data: "json, name=locations" })
  locations: number;

  @Metadata({ data: "json, name=measurements" })
  measurements: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.ProjectParameterDetails })
  parameters: ProjectParameterDetails[];

  @Metadata({ data: "json, name=sensorType" })
  sensorType?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: any[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle: string;
}
