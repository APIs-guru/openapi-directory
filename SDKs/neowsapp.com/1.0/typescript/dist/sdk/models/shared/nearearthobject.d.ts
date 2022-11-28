import { SpeakeasyBase } from "../../../internal/utils";
import { CloseApproachData } from "./closeapproachdata";
import { EstimatedDiameterContainer } from "./estimateddiametercontainer";
import { OrbitalData } from "./orbitaldata";
export declare class NearEarthObject extends SpeakeasyBase {
    absoluteMagnitudeH?: number;
    closeApproachData?: CloseApproachData[];
    designation?: string;
    estimatedDiameter?: EstimatedDiameterContainer;
    isPotentiallyHazardousAsteroid?: boolean;
    isSentryObject?: boolean;
    name?: string;
    nameLimited?: string;
    nasaJplUrl?: string;
    neoReferenceId?: string;
    orbitalData?: OrbitalData;
    sentryData?: string;
}
