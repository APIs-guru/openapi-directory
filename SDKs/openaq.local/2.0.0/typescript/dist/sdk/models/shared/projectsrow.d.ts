import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectParameterDetails } from "./projectparameterdetails";
export declare class ProjectsRow extends SpeakeasyBase {
    bbox?: number[];
    countries?: string[];
    entity?: string;
    firstUpdated: Date;
    id: number;
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdated: Date;
    locationIds: number[];
    locations: number;
    measurements: number;
    name: string;
    parameters: ProjectParameterDetails[];
    sensorType?: string;
    sources?: any[];
    subtitle: string;
}
