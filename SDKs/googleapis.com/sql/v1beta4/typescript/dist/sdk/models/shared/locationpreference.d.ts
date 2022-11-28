import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
**/
export declare class LocationPreference extends SpeakeasyBase {
    followGaeApplication?: string;
    kind?: string;
    secondaryZone?: string;
    zone?: string;
}
