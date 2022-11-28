import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User specified templates and configs for how to deidentify structured, unstructures, and image files. User must provide either a unstructured deidentify template or at least one redact image config.
**/
export declare class GooglePrivacyDlpV2TransformationConfig extends SpeakeasyBase {
    deidentifyTemplate?: string;
    imageRedactTemplate?: string;
    structuredDeidentifyTemplate?: string;
}
