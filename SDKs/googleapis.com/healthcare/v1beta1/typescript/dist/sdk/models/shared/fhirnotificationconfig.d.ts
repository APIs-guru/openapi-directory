import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the configuration for FHIR notifications.
**/
export declare class FhirNotificationConfig extends SpeakeasyBase {
    pubsubTopic?: string;
    sendFullResource?: boolean;
}
