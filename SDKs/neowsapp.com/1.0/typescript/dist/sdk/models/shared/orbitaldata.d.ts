import { SpeakeasyBase } from "../../../internal/utils";
import { OrbitClass } from "./orbitclass";
export declare class OrbitalData extends SpeakeasyBase {
    aphelionDistance?: string;
    ascendingNodeLongitude?: string;
    dataArcInDays?: number;
    eccentricity?: string;
    epochOsculation?: string;
    equinox?: string;
    firstObservationDate?: string;
    inclination?: string;
    jupiterTisserandInvariant?: string;
    lastObservationDate?: string;
    meanAnomaly?: string;
    meanMotion?: string;
    minimumOrbitIntersection?: string;
    observationsUsed?: number;
    orbitClass?: OrbitClass;
    orbitDeterminationDate?: string;
    orbitId?: string;
    orbitUncertainty?: string;
    orbitalPeriod?: string;
    perihelionArgument?: string;
    perihelionDistance?: string;
    perihelionTime?: string;
    semiMajorAxis?: string;
}
